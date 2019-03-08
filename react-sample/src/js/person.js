//-- 여기서 테스트 함 
//-- 여기서 하고 빌드하면 dist/js/bundle.js 에 들어갈꺼임 
//-- index.html 

    class Person {
        constructor (id,name) {
            this.id = id;
            this.name = name;
        }
        printName() {
            console.log(this.name);
        }
    }
     var person = new Person(1, "철수");
     person.printName();


     //-- 노출
     export default Person; 