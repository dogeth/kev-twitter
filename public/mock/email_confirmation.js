var changeEmailSettings={dialog:null,checkToShowEmailInstructions:function(A){if(A.hasClass("not-user-unconfirmed-email")&&A.hasClass("not-user-pending-email")){A.removeClass("show-email-instructions").addClass("dont-show-email-instructions")}},ready:function(){var A=$(".show-email-change");if(A.length){changeEmailSettings.dialog=new twttr.dialog({content:$("#change_email_dialog_template"),heading:$("<span>"+_("Change email address")+"</span>"),closeButton:true,overlay:true,width:510,ajax:{dataType:"json",success:function(B){changeEmailSettings.dialog.close();$(".unconfirmed-email-value").text(B.email);$(".email-notice.settings-email-info-visible").show();changeEmailSettings.dialog.$root.find("input[name=auth_password]").val("");$(".unconfirmed-email-value-input").val(B.email);if(B.has_pending){$(".pending-email-not-visible").hide();$(".pending-email-visible, .unconfirmed-email-visible").show();$("#changeable_email_text").addClass("pending")}(new InfoNotification()).setMessage(B.notice).show()},error:function(C){var B;try{B=JSON.parse(C.responseText)}catch(D){B={errorForFlash:_("Whoops! Something went wrong. Please refresh the page and try again!")}}(new InfoNotification()).setMessage(B.errorForFlash).show()}}});A.click(function(){changeEmailSettings.dialog.hideFlash=$(this).hasClass("no-flash");changeEmailSettings.dialog.animate=$(this).hasClass("animate");changeEmailSettings.dialog.open();return false})}$("a.cancel-pending-email").click(function(){$.ajax({type:"POST",url:"/account/cancel_pending_email",dataType:"json",success:function(C){$(".email-notice.settings-email-info-visible").hide();$(".pending-email-visible, .unconfirmed-email-visible").hide();$(".unconfirmed-email-value").text(C.email);$(".pending-email-not-visible").show();$("#changeable_email_text").removeClass("pending");var B=$("table.user-pending-email");B.removeClass("user-pending-email").addClass("not-user-pending-email");changeEmailSettings.checkToShowEmailInstructions(B)},error:function(C){var B;try{B=JSON.parse(C.responseText)}catch(D){B={errorForFlash:_("Whoops! Something went wrong. Please refresh the page and try again!")}}(new InfoNotification()).setMessage(B.errorForFlash).show()}});return false});$(".activation.resend-email").click(function(E){E.preventDefault();var D=$(this);function F(){D.closest(".resend-message").toggleClass("loading")}var B=new twttr.MinimumDelayCallback(1500);function C(G){B.delay(function(){F();(new InfoNotification()).setMessage(G).show()})}F();$.ajax({type:"POST",url:D.attr("href"),data:{authenticity_token:twttr.form_authenticity_token},dataType:"json",success:function(G){C(G.messageForFlash)},error:function(G){C(_("Whoops! Something went wrong. Please refresh the page and try again!"))}});return false})}};$(changeEmailSettings.ready);