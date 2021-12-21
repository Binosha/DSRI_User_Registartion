$(function(){
    var validated = true;

	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        onStepChanging: function (event, currentIndex, newIndex) { 
            form = $("#wizard-form");
            console.log(form)
            form.validate();
            console.log(currentIndex)
            console.log(newIndex)
            
            if (currentIndex == 0){
                var name = $("#name").val();
                var username = $("#username").val();
                var email = $("#email").val();
                var faculty = $("#faculty").val();
                var organization = $("#organization").val();
                
                if (!name){
                    alert("Please enter your name!");
                    validated = false; 
                }
                else if (!username){
                    alert("Please enter your username!");
                    validated = false; 
                }
                else if (!email){
                    alert("Please enter your email!");
                    validated = false; 
                }
                else if (!faculty){
                    alert("Please select your faculty!");
                    validated = false; 
                }
                else if (!organization){
                    alert("Please enter your department!");
                    validated = false; 
                }
            }

            if (validated == true){
                if ( newIndex === 1 ) {
                    $('.steps ul').addClass('step-2');
                } else {
                    $('.steps ul').removeClass('step-2');
                }
                if ( newIndex === 2 ) {
                    $('.steps ul').addClass('step-3');
                } else {
                    $('.steps ul').removeClass('step-3');
                }
    
                if ( newIndex === 3 ) {
                    $('.steps ul').addClass('step-4');
                } else {
                    $('.steps ul').removeClass('step-4');
                }
                if ( newIndex === 4 ) {
                    $('.steps ul').addClass('step-5');
                } else {
                    $('.steps ul').removeClass('step-5');
                }
                return true; 
            }
            else{
                return false;
            }
        },
        onFinished: function (event, currentIndex) {
            // var name = $("#name").val();
            // db.test_db_insert(name)

            $("#wizard-form").submit();
        },
        labels: {
            finish: "Submit",
            next: "Next",
            previous: "Previous"
        }
    });
    // Custom Steps Jquery Steps
    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
        if (validated){
            $("#wizard").steps('next');    
        }
    	
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Checkbox
    $('.checkbox-circle label').click(function(){
        $('.checkbox-circle label').removeClass('active');
        $(this).addClass('active');
    })
})
