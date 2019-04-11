var mongoose = require('mongoose');

let Parents = mongoose.model('Parents', {
    name: {
        type: String,
        field: "name",
        label: "Name",
        value: "",
        visible: true,
        editable: true,
        input: "text",
        validation: {
            required: true
        }
    },
    schoolId: {
        type: String,
        field: "schoolId",
        label: "SchoolId",
        value: "",
        visible: true,
        editable: true,
        input: "text",
        validation: {
            required: true
        }
    },
    phoneNumber: {
        type: Number,
        field: "phoneNumber",
        label: "PhoneNumber",
        value: "",
        visible: true,
        editable: true,
        input: "text",
        validation: {
            required: true
        }
    },
    student: {
        type: String,
        field: "student",
        label: "Student",
        value: "",
        visible: true,
        editable: true,
        input: "text",
        validation: {
            required: true
        }
    },
    address: {
        type: String,
        field: "address",
        label: "Address",
        value: "",
        visible: true,
        editable: true,
        input: "text",
        validation: {
            required: true
        }
    }
});

module.exports = { Parents }