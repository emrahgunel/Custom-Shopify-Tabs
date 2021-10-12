
<script>
    tabs = document.querySelectorAll('.tab');
    tabContents = document.querySelectorAll('.tab-content');


    tabs.forEach(function(tab){
        tab.addEventListener('click', function(){
                console.log(this);
                console.log(this.dataset);

                contentId = this.dataset.contentId;
                content = document.getElementById(contentId);
                console.log(content);

                tabContents.forEach(function(content){
                        content.classList.remove('active');
                });
                
                tabs.forEach(function(tab){
                        tab.classList.remove('active');
                });

                this.classList.add('active');
                content.classList.add('active');
        });
    });

</script>
