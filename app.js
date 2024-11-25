const App = {
    data()  {
        return {
            title:"Заметки с редактированием (ДЗ 1)",
            input: {
                value:'',
                placeholder:'Введите сообщение',
            },
            notes: [] ,
            editIndex:-1,
        }
          
    },
    mounted(){
        this.loadNotes();
    } ,
    watch: {
        notes:{
            handler(val){
                localStorage.setItem("notes1",JSON.stringify(val));
            },
            deep: true,
        },
    },
    
    methods :{
        loadNotes () {
            const localNotes=localStorage.getItem("notes1") ;
            if (localNotes) {
             this.notes=JSON.parse(localNotes);
            }
        },
        editNote(index) {
            this.editIndex=index;
            this.input.value=this.notes[index];

        },
        onSubmit() {
            if (this.editIndex>-1) {
                this.notes[this.editIndex]=this.input.value;
                this.editIndex=-1;
            } else {
                this.notes.push(this.input.value);
                
            }
            this.input.value="";

        },
        remove(index){
            this.notes.splice(index,1);

        }
    }
}
Vue.createApp(App).mount("#app");
