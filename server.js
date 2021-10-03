const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5000;

const db = require('./models/');
const Role = db.role;
const Category = db.category;

const School = db.school;

app.use(express());
app.use(compression({
    level: 9,
    threshold: 100 * 1000,
    filter: (req, res) => {
        if (req.headers["x-no-compression"]) {
            return false;
        }
        return compression.filter(req, res);
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

db.sequelize.sync().then(() => {
    console.log("Database Terkoneksi");
    // createCategory();
    // createRoles();
    // createTest();
});

function createCategory() {
    Category.create({
        id: 1,
        category_name: "Web Development"
    });
    Category.create({
        id: 2,
        category_name: "Android Development"
    });
    Category.create({
        id: 3,
        category_name: "Data Structures"
    });
    Category.create({
        id: 4,
        category_name: "Algorithms"
    });
    Category.create({
        id: 5,
        category_name: "Javascript"
    });
    Category.create({
        id: 6,
        category_name: "PHP"
    });
};

function createRoles() {
    Role.create({
        id: 1,
        role_name: "subscriber"
    });
    Role.create({
        id: 2,
        role_name: "admin"
    })
};

// function createTest() {
//     School.create({
//         name: "SMKN 1 Trenggalek"
//     });
//     School.create({
//         name: "SMKN 2 Trenggalek"
//     })
// }

//routes
require('./routes/Post-Routes')(app);
require('./routes/User-Auth-Routes')(app);
require('./routes/User-Routes')(app);
require('./routes/Image-Routes')(app);
require('./routes/Visitor-Routes')(app);

//test routes
require('./routes/Test-Routes')(app);

app.get('/api', (req, res) => {
    res.send("Homepage")
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});