//? -------------------- String ---------------------

// let myName = new String('Fahim Faysal');
// console.log(myName);

// let myName = 'Fahim Faysal';
// console.log(myName);

//* length of string
// let myName = 'Fahim Faysal';
// console.log(myName.length);

//* Escape character
// let sentence = "Allah said \"Fear not. Indeed, i am with you both; i hear you and i see you.\"";
// let sentence =
// ('Allah said "Fear not. Indeed, i am with you both; i hear and i see."');
// console.log(sentence);

//! Finding a string in a string
//* indexOf() & lastIndexOf()
// const myBioData = 'I am Fahim Faysal';
// console.log(myBioData.indexOf('Fa', 7));
// console.log(myBioData.lastIndexOf('Fa', 7));

//! Search for String in a string
//* search()
// const myBioData = 'I am Fahim Faysal';
// let searchData = myBioData.search('Fa', 8);
// console.log(searchData);

//! Extracting string
//*slice(start, end)
// let str = 'Apple, Banana, Kiwi, Mango';

// let result = str.slice(0, 5);
// console.log(str);
// console.log(result);

// let result = str.slice(7, -2);
// console.log(str);
// console.log(result);

//* Display only 280 character.
// let message =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, exercitationem? Natus, iusto officia. Tempore blanditiis possimus illo maxime, nobis animi libero aperiam atque id veniam omnis amet obcaecati nostrum veritatis neque, deleniti, esse assumenda numquam! Officiis rerum totam, enim quia vero accusantium ducimus et fugiat est id corporis quas harum repellendus possimus hic labore odio quasi nesciunt quae necessitatibus quisquam assumenda? Fugiat repellat laborum maxime rerum, rem deserunt cum quia itaque amet! Ullam, dolorum numquam sit adipisci similique provident deleniti vero non repellendus nesciunt placeat, illo dolorem quisquam consequatur consectetur modi sequi cum officiis. Recusandae, nam ea vel beatae vitae eos, consequatur eligendi molestias voluptates excepturi repellat inventore quaerat accusamus mollitia similique ullam? Nesciunt assumenda eligendi recusandae fugit aliquam iure temporibus architecto cumque, accusantium, ad molestias veritatis expedita. Perspiciatis illum numquam enim repellat ab error odio sed nesciunt ipsa, inventore, quis dolorem sint, aliquam alias corrupti reiciendis repudiandae impedit minus assumenda non eveniet culpa. Reiciendis sapiente ex tempore cumque necessitatibus pariatur culpa velit, doloribus quod nulla vitae nihil asperiores ipsam assumenda beatae eum est iste magnam! Unde et iste ratione non facilis eveniet blanditiis quos numquam quidem sint hic corrupti velit odio omnis beatae laborum id esse assumenda aliquam, magnam veniam? Earum nostrum ab iure? At possimus odio in saepe illo facilis consequatur ipsa et. Itaque optio explicabo id impedit ipsam eum architecto aliquam voluptate, possimus facilis quos odit. Quae cupiditate veritatis, adipisci dignissimos commodi architecto illum. Nobis accusantium quibusdam minus reprehenderit velit placeat quisquam iste, architecto voluptates rem illo facere esse, dignissimos deleniti quasi in adipisci tempore magnam. Excepturi perferendis dicta dignissimos quam voluptas distinctio minus, incidunt a voluptatibus, quisquam aut officia. Exercitationem, nostrum quidem! Fugiat eveniet sed inventore odit amet accusamus atque quod. Perspiciatis tempore molestias ducimus aliquam facere voluptates eum facilis illo? Dignissimos incidunt quibusdam assumenda delectus.';
// console.log(message.slice(0, 280));
// console.log(message.slice(0, 280).length);

//*substring(start, end)
// let str = 'Apple, Banana, Kiwi, Mango';
// let res = str.substring(8, 4);
// console.log(res);
// let res = str.substring(8, -4);
// console.log(res);

//*substr(start, length)
// let str = 'Apple, Banana, Kiwi, Mango';
// let res = str.substr(0, 4);
// let res = str.substr(-11);
// console.log(res);

//! Replacing string content
//* replace()
// let str = 'i am fahim faysal nasif';
// let res = str.replace('f', 'F');
// console.log(str);
// console.log(res);

//! Extracting string character
//* charAt() & charAtCode()
// let str = 'HELLO WORLD';
// console.log(str.charAt(0));
// console.log(str.charAt(0).charCodeAt());

//! Other useful method.
//* Property Access [  ]
// let str = 'HELLO WORLD';
// console.log(str[0]);

//* upper & lower
// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//* concat()
// let firstName = 'fahim';
// let lastName = 'faysal';
// console.log(firstName + lastName);
// console.log(`${firstName} ${lastName}`);
// console.log(firstName.concat(lastName));
// console.log(firstName.concat(' ', lastName));

//* trim()
// var str = '            hello             world      ';
// console.log(str.trim());

//* split()
var txt = 'a,b|c,d e';
console.log(txt.split(','));
console.log(txt.split('|'));
console.log(txt.split(' '));
