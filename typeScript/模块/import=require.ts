/**
 * Created by Administrator on 2017/2/9.
 */

import zip=require("./ZipCodeValidatorExport=");

let strings=["Hello","98052","101"];

let Validate=new zip();

strings.forEach(s=>{
   console.log(`"${s}"-${Validate.isAcceptable(s)?"matches":"does not match"}`);
});

