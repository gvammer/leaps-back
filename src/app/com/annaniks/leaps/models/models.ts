
export interface MenuItem {
    icon: string,
    title: string,
    routerLink: string;
}

export interface Permission {
    description: string;
    name: string;
    title: string;
    _id: string;
}


export interface Role {
    createdAt: string;
    name: string;
    permissions: Permission[];
    items: Item[];
    title: string;
    updatedAt: string;
    _id: string;
}
interface Item {
    title: string;
    _id: string;
}

export interface Certificates {
    createdAt: string,
    created_by: string,
    history: History[];
    buttons: Button[];
    information: Information;
    _id: string;
}

interface History { }

export interface Button {
    name: string;
    _id: string;
}

interface Information {
    attendantInformation: AttendantInformation,
    certifierInformation: CertifierInformation,
    child: Child;
    father: Father;
    informantInformation: InformantInformation;
    mother: Mother,
    staffRecording: StaffRecording;
    status: string;
    steps: string[];
    system: System;
    updatedAt: string;
    _id: string;

}

interface AttendantInformation {
    attendant: string;
    firstName: string,
    lastName: string,
    staffCity: string,
    title: string,
    userId: string,
}
interface CertifierInformation {
    acceptCertificate: string,
    city: string,
    email: string,
    firstName: string,
    lastName: string,
    signatureDate: string,
    state: string,
    zip: string,
}

interface Child {
    birthCity: string,
    birthDateAndTime: string,
    birthPlace: string,
    bloodType: string,
    country: string,
    firstName: string,
    height: number;
    lastName: string,
    middleName: string,
    plurality: string,
    sex: string,
    weight: number;
}

interface Father {
    address: string;
    cityOfResidence: string;
    countryOfResidence: string;
    dateOfBirth: string;
    documentExpirationDate: string;
    documentID: string;
    documentIssuer: string;
    documentType: string;
    email: string;
    firstName: string;
    highestLevelOfEducation: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    placeOfBirth: string;
    relationshipToChild: string;
    stateOfResidence: string;
    _id: string;
}

interface InformantInformation {
    address: string,
    cityOfResidence: string,
    countryOfResidence: string,
    dateOfBirth: string,
    documentExpirationDate: string,
    documentID: string,
    documentIssuer: string
    documentType: string,
    email: string,
    firstName: string,
    highestLevelOfEducation: string,
    lastName: string,
    middleName: string,
    phoneNumber: string,
    placeOfBirth: string,
    relationshipToChild: string,
    stateOfResidence: string,
    _id: string,
}

interface Mother {
    address: string;
    cityOfResidence: string;
    countryOfResidence: string;
    dateOfBirth: string;
    documentExpirationDate: string;
    documentID: string;
    documentIssuer: string;
    documentType: string;
    email: string;
    firstName: string;
    highestLevelOfEducation: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    placeOfBirth: string;
    relationshipToChild: string;
    stateOfResidence: string;
    _id: string;
}


interface StaffRecording {
    department: string;
    firstName: string;
    lastName: string;
    organizationAddress: string;
    organizationId: string;
    organizationName: string;
    signature: string;
    title: string;
    userId: string;
}



interface System {
    authOfCertificate: string;
    birthCertificateId: string;
    location: string;
    timeStamp: string;
}

export interface Organization {
    createdAt: string;
    departments: Departments[];
    name: string;
    title: string;
    updatedAt: string;
    _id: string;
}


export interface Departments {
    description: string;
    name: string;
    _id: string;
}

export interface Statuses {
    allowRoles: Role[];
    canComeFrom: canComeFrom[];
    createdAt: string;
    description: string;
    name: string;
    updatedAt: string;
    _id: string;
}


interface canComeFrom {
    allowRoles: object;
    canComeFrom: Object;
    createdAt: string;
    description: string;
    name: string;
    updatedAt: string;
    _id: string
}

export interface Users {
    active: boolean;
    department: Departments;
    firstName: string;
    lastName: string;
    organization: Organization;
    role: Role;
    _id: string;

}

export interface Template {
    sections: Section[],
    type: string,
    _id: string,
    statuses: Statuses[]
}

export interface Section {
    fields: Fields[];
    key: string,
    title: string,
    // statuses: Statuses[]
}


export interface Fields {
    key: string,
    priority: number,
    rightSight: boolean,
    title: string,
    type: string,
    values: Values;
    width: number,
    _id: string,
    _required: boolean,

}

interface Values {
    value: string,
}

export interface FildType {
    type: string;
}

export interface WidthType {
    type: number;
}