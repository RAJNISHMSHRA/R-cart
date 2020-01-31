
  export default pushProduct= e => {
    var target = e.target;
    const {name, value, type} = target;
    if (target.type == 'file'){
      console.log ('file is executing');
      var base64String = '';
      var f = e.target.files[0]; // FileList object
      var reader = new FileReader ();
      // Closure to capture the file information.
      reader.onload = (function (theFile) {
        return function (evnt) {
          var binaryData = evnt.target.result;
          //Converting Binary Data to base 64
          base64String = window.btoa (binaryData);
          //showing file converted to base64
          // document.getElementById('base64').value = base64String;
          alert ('File converted to base64 successfuly!\nCheck in Textarea');
          setimg (base64String);
          console.log(base64String)
        };
      }) (f);
      // Read in the image file as a data URL.
      reader.readAsBinaryString (f);
      const setimg = base64String => {
        this.setState ({
          picture: base64String,
        });
      };
      
    } else {
      console.log ('except file im executed');
      this.setState ({
        [name]: type === 'number' ? Number (value) : value,
      });
    }
  };