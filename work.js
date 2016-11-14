$(document).ready(function(){
                //if the document is jquery ready, then do the following function.
    
                var topDiv = document.getElementById('top');
    
                $.ajax({
                    url:"top.html",
                    dataType:"html",
                    success:function(resp){
                        console.log(resp);
                        topDiv.innerHTML = resp;
                        }

                    });
                    
                var midDiv = document.getElementById('middle')
                $.ajax({
                    url:'middle.html',
                    dataType:'html',
                    success:function(resp){
                        console.log(resp);
                        midDiv.innerHTML = resp;
                        }
                    });
                var bottomDiv = document.getElementById('bottom')
                $.ajax({
                    url:'bottom.html',
                    dataType:'html',
                    success:function(resp){
                        console.log(resp);
                        bottomDiv.innerHTML = resp;
                        }
                    });
              
    
                /*$.ajax({
                    url:"data.html",
                    dataType:"html",
                    success:function(resp){
                        console.log(resp);
                        linksdiv.innerHTML = resp;
                    }
                });*/
            });