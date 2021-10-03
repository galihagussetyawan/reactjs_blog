export function convertDate(mysqlDate) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const myDate = new Date(mysqlDate);
    const result = myDate.getDate() + " " + monthNames[myDate.getMonth()] + " " + myDate.getFullYear();

    return result.toString();
}