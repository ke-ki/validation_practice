$(function () {

  
  //メッセージを設定
  const MSG_TEXT_MAX = '20文字以内で入力してください。';
  const MSG_EMPTY = '入力必須です。';
  const MSG_EMIL_TYPE = 'emailの形式ではありません。';
  const MSG_TEXTAREA_MAX = '100文字以内で入力してください。';
  const MSG_OK = '条件を満たしています';

  //キーボードに触れたとき実行
$('.valid-text').keyup(function(){
  //親要素取得
  var form_g = $(this).closest('.form-group');
  //もし未入力の場合
  if($(this).val().length === 0){
    //エラークラスを付ける
    form_g.removeClass('has-success').addClass('has-error');
    //エラーメッセージを表示
    form_g.find('.help-block').text(MSG_EMPTY);
    //文字が少ない場合
  }else if($(this).val().length >= 20){
    //エラークラスを付ける
    form_g.removeClass('has-success').addClass('has-error');
    //エラーメッセージを表示
    form_g.find('.help-block').text(MSG_TEXT_MAX);
    //条件を満たしている場合
  }else{
    //successクラスを付ける
    form_g.removeClass('has-error').addClass('has-success');
    //メッセージを表示
    form_g.find('.help-block').text(MSG_OK);
  }
  
});
  
  //キーボードに触れたとき実行
  $('.valid-email').keyup(function(){
    //親要素を取得
    var form_g = $(this).closest('.form-group');
    //未入力のとき
    if($(this).val().length === 0){
      //errorクラスを付ける
      form_g.removeClass('has-success').addClass('has-error');
      //エラーメッセージを表示
      form_g.find('help-block').text(MSG_EMPTY);
      //文字が多い場合、又はemailの形式でない場合
    }else if($(this).val().length >= 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
      //errorクラスを付ける
      form_g.removeClass('has-success').addClass('has-error');
      //エラーメッセージを表示
      form_g.find('.help-block').text(MSG_EMIL_TYPE);
      //問題ないとき
    }else{
      //successクラスを付ける
      form_g.removeClass('has-error').addClass('has-success');
      //メッセージを表示
      form_g.find('help-block').text(MSG_OK);
    }
    
  });



});
