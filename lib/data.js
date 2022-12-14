//import fs from 'fs';
//import path from 'path';
import got from 'got'

const dataURL = "https://dev-cs55week11.pantheonsite.io/wp-json/twentytwentyone-child/v1/contacts";
const dataURLproducts = "https://dev-cs55week11.pantheonsite.io/wp-json/twentytwentyone-child/v1/products";
const dataURLfoods = "https://dev-cs55week11.pantheonsite.io/wp-json/twentytwentyone-child/v1/foods";

export async function getAllIds() {
  let jsonString;
  try{
    jsonString = await got(dataURL);
    //console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });
}

export async function getSortedList() {
  let jsonString;
  try{
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}

export async function getData(idRequested) {
  
  let jsonString;
  try{
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  jsonObj.forEach(
    function(queryvalue){
      let newstring = '{"' + queryvalue.new_fields + '"}';
      newstring = newstring.replace(/,/g,'","').replace(/:/g,'":"');
      let parsedstring = JSON.parse(newstring);
      console.log(parsedstring)
      queryvalue.new_firstname = Object.values(parsedstring.first_name);
      queryvalue.new_lastname = Object.values(parsedstring.last_name);
      queryvalue.new_number = Object.values(parsedstring.number);
    }
  );

  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];

  } else {
    objReturned = {};
  }
  console.log(objReturned)
  return objReturned;
}

export async function getAllIdsProduct() {
  let jsonString;
  try{
    jsonString = await got(dataURLproducts);
    console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });
}

export async function getSortedListProducts() {
  let jsonString;
  try{
    jsonString = await got(dataURLproducts);
    console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}

export async function getDataProduct(idRequested) {
  let jsonString;
  try{
    jsonString = await got(dataURLproducts);
    console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  console.log(jsonObj)
  jsonObj.forEach(
    function(queryvalue){
      let newstring = '{"' + queryvalue.new_fields + '"}';
      newstring = newstring.replace(/,/g,'","').replace(/:/g,'":"');
      let parsedstring = JSON.parse(newstring);
      console.log(parsedstring)
      queryvalue.new_name = Object.values(parsedstring.product_name);
      queryvalue.new_price = Object.values(parsedstring.price);
      queryvalue.new_color = Object.values(parsedstring.type);
    }
  );

  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];

  } else {
    objReturned = {};
  }
  return objReturned;
}


export async function getAllIdsFoods() {
  let jsonString;
  try{
    jsonString = await got(dataURLfoods);
    console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });
}

export async function getSortedListFoods() {
  let jsonString;
  try{
    jsonString = await got(dataURLfoods);
    console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}

export async function getDataFoods(idRequested) {
  
  let jsonString;
  try{
    jsonString = await got(dataURLfoods);
    console.log(jsonString.body);
  } catch {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  console.log(jsonObj)
  jsonObj.forEach(
    function(queryvalue){
      let newstring = '{"' + queryvalue.new_fields + '"}';
      newstring = newstring.replace(/,/g,'","').replace(/:/g,'":"');
      let parsedstring = JSON.parse(newstring);
      console.log(parsedstring)
      queryvalue.new_description = Object.values(parsedstring.description);
      queryvalue.new_rating = Object.values(parsedstring.rating);
      queryvalue.new_good = Object.values(parsedstring.good);
    }
  );
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];

  } else {
    objReturned = {};
  }
  return objReturned;
}