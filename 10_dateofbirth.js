const age = function (BornYear){
     let date = new Date();
     let presentyear = date.getFullYear();
     let Year = presentyear-BornYear;
      console.log(Year);
};
age(1998);