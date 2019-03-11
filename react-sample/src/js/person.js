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
     //-- 여기다가 해도 되는데, import 를 잘해야 함. 
     //var person = new Person(1, "철수");
     //person.printName();

     class Participant extends Person {
         constructor (id, name, channel) {
             super(id,name);
             this.channel = channel;
         }

         sendMessage(message) {
            console.log(this.name + "님이 " + this.channel+ "에 '" + message + "'를 포스팅 했습니다."); 
            //console.log('{this.name}님이 {this.channel}에 {message}를 포스팅 했습니다.');
         }
     }



     //-- 노출
     //export default Person; 
     export { Person as default, Participant}; //-- 클래스 두개 다 내보내기 