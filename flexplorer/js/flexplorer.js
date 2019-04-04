    $(function() {
        var demo = $("#demo");
        var demo_styles = $("#demo_styles");
        var flex_items = $("#demo .flex-item");

        // Calculate and apply incremental hsl colors to the flex-items
        var pallete = Math.floor(Math.random() * 360) + 100; // To make life easier later and always have a 3 digit number
        $('.flex-item').each(function(i) {
            var hue = pallete + (i * 5);
            var background_color = 'background:hsl(' + hue + ',50%,75%)';
            $(this).attr("style", background_color);
        });


        $(window).load(function() {

            flex_properties = '\t-webkit-flex-flow: row wrap;\n'
                    + '\tflex-flow: row wrap;\n';

            justify_content = '';

            flex = '\t-webkit-flex: 1 auto;\n'
                + '\tflex: 1 auto;\n';


            function updateResult() {
                var flex_container_code = '.flex-container {\n'
                    + '\tdisplay: -webkit-flex;\n'
                    + '\tdisplay: flex;\n'
                    + flex_properties
                    + justify_content
                    + '}\n';
                var flex_item_code = '.flex-item {\n'
                    + flex
                    + '}';

                var style = flex_container_code + '\n' +  flex_item_code;

                $("#demo_styles").html(style);

            }


            // Leggo
            $("body").addClass("go");

            // Toggle sidebar controls
            $("#toggle-controls").click(function() {
                $("#sidebar").toggleClass("minimized");
            });


            // Flex property controls
            $('#flex-grow-control, #flex-shrink-control, #flex-basis-control').blur(function() {
                var flex_grow_val = $('#flex-grow-control').val();
                var flex_shrink_val = $('#flex-shrink-control').val();
                var flex_basis_val = $('#flex-basis-control').val();

                var flex_val = flex_grow_val + ' ' + flex_shrink_val + ' ' + flex_basis_val;
                    if(flex_val == "0 1 auto"){ var flex_val = "initial"; }
                    if(flex_val == "1 1 auto"){ var flex_val = "auto"; }
                    if(flex_val == "0 0 auto"){ var flex_val = "none"; }


                flex = '\t-webkit-flex: ' + flex_val + ';\n'
                + '\tflex: ' + flex_val + ';\n'

                updateResult();
            });


            // Sidebar property controls
            $('#flex-direction-control, #flex-wrap-control').change(function() {
                var flex_direction_val = $('#flex-direction-control :selected').val();
                var flex_wrap_val = $('#flex-wrap-control :selected').val();

                flex_properties = '\t-webkit-flex-flow: ' + flex_direction_val + ' ' + flex_wrap_val + ';\n'
                    + '\tflex-flow: ' + flex_direction_val + ' ' + flex_wrap_val + ';\n';

                updateResult();
            });



            // justify-content property controls
            $('#justify-content-control').change(function() {
                var justify_content_val = $('#justify-content-control :selected').val();
                    if (justify_content_val == "flex-start") { var flex_pack_val = "start"; justify_content = ''; }
                    if (justify_content_val == "flex-end") { var flex_pack_val = "end"; }
                    if (justify_content_val == "space-between" || "space-around") { var flex_pack_val = "justify"; }

                justify_content = '\t-webkit-justify-content: ' + justify_content_val + ';\n'
                    + '\tjustify-content:' + justify_content_val + ';\n';

                if (justify_content_val == "flex-start") { justify_content = ''; }

                updateResult();
            });


            // Count increase button, append brand new .flex-item, countinuing background-color
            var text_array = ["banana", "lorem", "culpa", "anim", "mollit", "id", "est", "laborum"];
            var c = 0;
            $("#count-increase").click(function() {
                c++;
                if (c > 7) { c = 0; }
                var flex_item_text = text_array[c];
                var last_attr_style = $("#demo .flex-item").last().attr("style");
                var base = last_attr_style.substring(15, 18);
                var hue = parseInt(base) + 5;
                var new_flex_item = '<div style="background:hsl(' + hue + ',50%,75%);" class="flex-item"><span contenteditable="true">' + flex_item_text + '</span></div>';

                demo.append(new_flex_item);
            });


            // Count decrease button, remove last .flex-item
            $("#count-decrease").click(function() {
                if ($("#demo .flex-item").length > 1) {
                    $("#demo .flex-item").last().remove();
                }
            });

        });
    });