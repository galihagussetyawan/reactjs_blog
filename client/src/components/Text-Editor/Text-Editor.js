import React, { useState, useEffect } from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import styled components
import { TextEditorContainer, LeftColumn, TitleSection, Title, InputTitle, InputImageSection, InputImage, TextEditorSection, RightColumn, InformationContainer, InformationSection, InformationKey, InformationValue, InformationTitle, InformationStatus, CategorySection, CategorySelect, CategoryOption } from './TextEditor-Styled';

import ImageShow from '../Image-Show/Image-Show';

// import services
import contentServices from '../../services/Content-Services';
import { imageServices } from '../../services/Image-Services';
import categoryServices from '../../services/category-service';
import visitorServices from '../../services/Visitor-Service';

// import core-ui
import Alert from '../../components/core-ui/Alert/Alert';
import Button from '../../components/core-ui/Buttons/Buttons';

//import helpers
import { convertDate } from '../../helpers/ConvertDate';

function TextEditor(props) {
    //content state
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [publishedAt, setPublishedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const [allCategory, setAllCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(1);


    const [selectedFile, setSelectedFile] = useState();
    const [previewImage, setPreviewImage] = useState();
    const [toggleShowImage, setToggleShowImage] = useState(false);
    const [toggleAlert, setToggleAlert] = useState(false);
    const [statusAlert, setStatusAlert] = useState();
    const [messageAlert, setMessageAlert] = useState();
    const [isEdit, setIsEdit] = useState(false);

    const route = useRouteMatch();
    const { id } = useParams();

    // edit mode or post mode
    useEffect(() => {
        if (route.url === "/post/edit/" + id) {
            setIsEdit(true);

            contentServices.getContent(id)
                .then(response => {
                    setTitle(response.data.title);
                    setContent(response.data.content);
                    setPublishedAt(response.data.createdAt);
                    setUpdatedAt(response.data.updatedAt);
                    setSelectedCategory(response.data.category.id);
                });
        }

    }, []);

    const titleHandleChange = event => {
        setTitle(event.target.value);
    };

    // submit new post
    const handleSubmit = () => {

        imageServices.uploadImages(selectedFile)
            .then(response => {
                const id = response.data.body.id;

                contentServices.postContent(title, content, id, selectedCategory)
                    .then(response => {
                        if (response.status === 200) {
                            setStatusAlert("Success");
                            setMessageAlert("Your article has been submit successfully");
                            setToggleAlert(!toggleAlert);
                        }

                        //create visitor post count
                        const postId = response.data.id;
                        visitorServices.createVisitorPost(postId)

                    })
                    .catch(error => error);



            })
            .catch(error => {
                if (error) {
                    setStatusAlert("Error");
                    setMessageAlert("A problem has been occured while submitting your article");
                    setToggleAlert(!toggleAlert);
                }
            });


    };

    // handle update
    const handleUpdate = () => {
        contentServices.updatePost(title, content, id, selectedCategory)
            .then(response => {
                if (response.status === 200) {
                    setStatusAlert("Success");
                    setMessageAlert("Update successfully");
                    setToggleAlert(!toggleAlert);
                }
            })
            .catch(error => {
                setStatusAlert("Error");
                setMessageAlert("Failed update");
                setToggleAlert(!toggleAlert);
            })
    };

    // handle select image
    const handleSelectFile = event => {
        setSelectedFile(event.target.files[0]);
    };

    // preview image sebelum upload
    useEffect(() => {
        if (!selectedFile) {
            setPreviewImage(undefined)
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreviewImage(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    // image preview show handler
    const handleShowPreviewImage = () => {
        setToggleShowImage(!toggleShowImage);
    };

    const handleCloseAlert = () => {
        setToggleAlert(!toggleAlert);
    };


    //category
    useEffect(() => {
        categoryServices.getCategoryList()
            .then(response => setAllCategory(response.data))
    }, []);

    const handleCategory = event => {
        setSelectedCategory(event.target.value);
    };


    return (
        <TextEditorContainer>
            <Helmet>
                <title>{isEdit ? "Edit Post: " + title : "Create New Post"}</title>
            </Helmet>

            {/* LEFT COLUMN SECTION */}

            <LeftColumn>
                <Title>Title Page</Title>

                {/* input title section */}
                <TitleSection>
                    <InputTitle onChange={titleHandleChange} value={title} />
                </TitleSection>

                {/* input main image section */}
                <InputImageSection>
                    <InputImage type="file" onChange={handleSelectFile} ></InputImage>
                    {selectedFile === undefined ? "" : <button onClick={handleShowPreviewImage} >Preview Image</button>}
                </InputImageSection>

                {/* text editor section */}
                <TextEditorSection>
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        onChange={(e, editor) => {
                            const data = editor.getData();
                            setContent(data);
                        }}

                        // style ckeditor height
                        onReady={(editor) => {
                            editor.editing.view.change((writer) => {
                                writer.setStyle(
                                    "height",
                                    "450px",
                                    editor.editing.view.document.getRoot()
                                );
                            });
                        }}
                    />

                </TextEditorSection>

            </LeftColumn>


            {/* RIGHT COLUMN SECTION */}

            <RightColumn>
                <InformationContainer>
                    <InformationSection>
                        <InformationTitle>Information Content</InformationTitle>

                        <InformationStatus>
                            <InformationKey>Status:</InformationKey>
                            <InformationValue>{isEdit === true ? "Publish" : "-"}</InformationValue>
                        </InformationStatus>

                        <InformationStatus>
                            <InformationKey>Create Date:</InformationKey>
                            <InformationValue>{isEdit === true ? convertDate(publishedAt) : "-"}</InformationValue>
                        </InformationStatus>

                        <InformationStatus>
                            <InformationKey>Last Update:</InformationKey>
                            <InformationValue>{isEdit === true ? convertDate(updatedAt) : "-"}</InformationValue>
                        </InformationStatus>

                        <InformationStatus>
                            <InformationStatus>Category:</InformationStatus>
                            <CategorySelect value={selectedCategory} onChange={handleCategory}>
                                {allCategory.map(data => {
                                    return (
                                        <CategoryOption value={data.id}>{data.category_name}</CategoryOption>
                                    )
                                })}
                            </CategorySelect>
                        </InformationStatus>


                        <Button
                            onClick={isEdit === true ? handleUpdate : handleSubmit}
                            theme="main"
                            text={isEdit === true ? "Update" : "Submit"}
                        />
                    </InformationSection>

                </InformationContainer>
            </RightColumn>

            {toggleShowImage && <ImageShow onClick={handleShowPreviewImage} src={previewImage} />}
            {toggleAlert && <Alert status={statusAlert} message={messageAlert} onClick={handleCloseAlert} />}
        </TextEditorContainer>
    );
};

export default TextEditor;