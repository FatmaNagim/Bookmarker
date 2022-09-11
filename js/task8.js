
var B_name = document.getElementById("bookmark-name");
var B_url  = document.getElementById("site-url");
var siteName = document.getElementById("Sname");
var bContainer;

if ( localStorage.getItem("BookMarkList") == null )
{
   bContainer = [];
}
else
{
   bContainer = JSON.parse( localStorage.getItem("BookMarkList") ) ;
   display();
}


function addBookMark()
{
   if (bContainer.length != 0)
   {
      for(var i=0 ; i<bContainer.length ; i++)
    {
      if (B_url.value == bContainer[i].link)
      {
         alert('This URL is already in The Bookmarks');
         var validation = false ;
         break ;
      }
   else
   {
       validation = true
   }
   }
if (validation == true )
{
   bookMark = {name: B_name.value , link: B_url.value};
   bContainer.push(bookMark)
   localStorage.setItem("BookMarkList",JSON.stringify(bContainer))
   clearForm();
   display()  
}
}
else if(bContainer.length == 0)
{
        bookMark = {name: B_name.value , link: B_url.value};
        bContainer.push(bookMark)
        localStorage.setItem("BookMarkList",JSON.stringify(bContainer))
        clearForm();
        display()  
}
}

function clearForm()
{
   B_name.value ="" ;
   B_url.value  ="" ;
}

function display()
{
   var container = "" ;
   for(var i=0 ; i<bContainer.length ; i++)
   {
      container +=`<div class="row justify-content-between  member2 py-5 ps-5 mb-3">

      <div class="col-md-5 fw-bold fs-3 px-md-5 mx-md-5 text-white pb-md-0 pb-sm-5">
          <i class="fas fa-link text-danger px-md-2"></i> 
          <span  id="Sname">${bContainer[i].name}</span>
      </div>
      <div class="col-md-3">
          <a href="${bContainer[i].link}" target="_blank" class="btn btn-danger mx-2">Visit</a>
          <button class="btn btn-danger" onclick=" deletebookMark(${i})">delete</button>
      </div>
  </div>
` }
   document.getElementById("bookmark-body").innerHTML=container
}

function deletebookMark(index)
{
   bContainer.splice(index,1)
   display()
   localStorage.setItem("BookMarkList",JSON.stringify(bContainer))
}
