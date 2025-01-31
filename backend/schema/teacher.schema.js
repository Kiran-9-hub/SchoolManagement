import { Schema } from "mongoose";

const teacherSchema = new Schema(
    {
        fullName: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true,
            minlength: [3, 'Full name must be at least 3 characters long'],
            maxlength: [100, 'Full name must be less than 100 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            validate: {
                validator: function (v) {
                    return /^\S+@\S+\.\S+$/.test(v);
                },
                message: 'Please enter a valid email address',
            },
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters long'],
        },
        birthDate: {
            type: Date,
            required: [true, 'Birth date is required'],
        },
        joiningDate: {
            type: Date,
            required: [true, 'Joining date is required'],
        },
        gender: {
            type: String,
            required: [true, 'Gender is required'],
            enum: ['Male', 'Female', 'Other'],
        },
        address: {
            street: {
                type: String,
                required: [true, 'Street is required'],
            },
            city: {
                type: String,
                required: [true, 'City is required'],
            },
            state: {
                type: String,
                required: [true, 'State is required'],
            },
            zipCode: {
                type: String,
                required: [true, 'Zip code is required'],
                validate: {
                    validator: function (v) {
                        return /^\d{5,6}$/.test(v);
                    },
                    message: 'Please enter a valid zip code',
                },
            },
        },
        phoneNumber: {
            type: String,
            required: [true, 'Phone number is required'],
            validate: {
                validator: function (v) {
                    return /^\d{10}$/.test(v);
                },
                message: 'Please enter a valid 10-digit phone number',
            },
        },
        qualifications: {
            type: String,
            required: [true, 'Qualifications are required'],
        },
        subjects: {
            type: [String],
            required: [true, 'At least one subject is required'],
        },
        salaryDetails: {
            basic: {
                type: Number,
                required: [true, 'Basic salary is required'],
                min: [0, 'Basic salary must be a positive number'],
            },
            allowances: {
                type: Number,
                default: 0,
                min: [0, 'Allowances must be a positive number'],
            },
            deductions: {
                type: Number,
                default: 0,
                min: [0, 'Deductions must be a positive number'],
            },
            netSalary: {
                type: Number,
                default: function () {
                    return this.salaryDetails.basic + this.salaryDetails.allowances - this.salaryDetails.deductions;
                },
                validate: {
                    validator: function (v) {
                        return v >= 0;
                    },
                    message: 'Net salary cannot be negative',
                },
            },
        },
        emergencyContact: {
            name: {
                type: String,
                required: [true, 'Emergency contact name is required'],
            },
            relationship: {
                type: String,
                required: [true, 'Relationship with emergency contact is required'],
            },
            phoneNumber: {
                type: String,
                required: [true, 'Emergency contact phone number is required'],
                validate: {
                    validator: function (v) {
                        return /^\d{10}$/.test(v);
                    },
                    message: 'Please enter a valid 10-digit phone number',
                },
            },
        },
        otp: {
            type: Number,
            
        },
        otpCreatedAt: {
            type: Date,
             
        },
    },
    {
        timestamps: true,
    }
);

export default teacherSchema;
