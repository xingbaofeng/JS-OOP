function createPerson(firstName, lastName) {


   var person = {
      get firstName() {
         return firstName;
      },
      get lastName() {
         return lastName;
      },
      greet: function (name) {
         return "Hello, " + name + ". My name is " + firstName;
      }
   };

   return person;
}



var obj = createPerson("John", "Doe");
var obj2 = createPerson("Joe", "Smith");

obj.greet === obj2.greet; // false
//工厂模式的缺点：
//无法用instanceof来判断对象的类型 
//每个对象的greet函数都是一个新的对象，虽然它们的功能相同，这样很浪费内存；