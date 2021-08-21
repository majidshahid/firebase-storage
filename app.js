let a =(image)=>{
  return new Promise((resolve,reject)=>{


   var upload= firebase.storage().ref(`myfile/${image.name}`).put(image);
  upload.on('state_changed', 
  (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: 
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: 
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
   reject(erroe)
  }, 
  () => {
    
  upload.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
  resolve(downloadURL)
    });
  }
);
})

}

var add= async()=>{
    var img = document.getElementById('one');
    // var image=
  let b = await  a( img.files[0]);
  console.log("new===>"+b)
}