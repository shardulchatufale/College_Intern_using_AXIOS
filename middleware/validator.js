import mongoose from 'mongoose'

// 1st Validator ==>

export const isValidObjectId = (objectId) => {
  return mongoose.Types.ObjectId.isValid(objectId);
};

//------------------------------------------------------------------------------------//

// 2nd Validator ==>

export const objectValue = (value) => {
  if (typeof value === 'undefined' || value === null) return false;
  if (typeof value === 'string' && value.length === 0) return false;
  return true;
};

//------------------------------------------------------------------------------------//

// 3rd Validator ==>

export const keyValue = (value) => {
  if (Object.keys(value).length === 0) return false;
  return true;
};

//------------------------------------------------------------------------------------//

// 4th Validator ==>

export const nameRegex = (value) => {
  let nameRegex = /^[A-Za-z\s]{1,}[\]{0,1}[A-Za-z\s]{1,}$/;
  if (nameRegex.test(value)) return true;
};

//------------------------------------------------------------------------------------//

// 5th Validator ==>

export const collegeRegex = (value) => {
  let collegeRegex =
    /^[A-Za-z\s]{0,}[\.,'-]{0,1}[A-Za-z\s]{0,}[\.,'-]{0,}[A-Za-z\s]{0,}[\.,'-]{0,}[A-Za-z\s]{0,}[\.,'-]{0,}[A-Za-z\s]{0,}[\.,'-]{0,}[A-Za-z\s]{0,}$/;
  if (collegeRegex.test(value)) return true;
};

//------------------------------------------------------------------------------------//

// 6th Validator ==>

export const emailRegex = (value) => {
  let emailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  if (emailRegex.test(value)) return true;
};

//------------------------------------------------------------------------------------//

// 7th Validator ==>

export const mobileRegex = (value) => {
  let mobileRegex = /^[\]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
  if (mobileRegex.test(value)) return true;
};

//------------------------------------------------------------------------------------//

// 8th Validator ==>

export const urlRegex = (value) => {
  let urlRegex = /(https|http?:\/\/.*\.(?:png|gif|webp|jpeg|jpg))/i;
  if (urlRegex.test(value)) return true;
};

