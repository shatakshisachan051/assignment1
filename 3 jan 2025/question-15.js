
let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    
    buildSentence : function ( subject,verb,object){
      if((!this.subject) || (!this.verb) || (!this.object)  ){
        return "Incomplete sentence";
      }
      return `${this.subject} ${this.verb} ${this.object}`;
      
    },
    
   updateProperty : function ( property, value){
      
      //console.log(this[property]);
     if((!this[property]) || (!value)){
       return "Invalid property";
     }
     this[property] = value;
      
     return `${this.subject} ${this.verb} ${this.object}`;
      
   }
    
 }
 
 
 console.log(sentenceBuilder.buildSentence());
 console.log(sentenceBuilder.updateProperty("object", "running"));
 