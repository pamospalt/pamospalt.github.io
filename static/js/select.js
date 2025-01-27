$(function() {
    $('.partial_label-selector-3D').change(function() {
      var dataset = $('#partial_label-selector1_3D').val();
  
      // 隐藏所有内容
      $('.partial_label_3D').hide();
  
      // 显示选中的内容
      if (dataset === 'softball') {
        $('.partial_label_3D.softball').show();
      } else if (dataset === 'basketball') {
        $('.partial_label_3D.basketball').show();
      } else if (dataset === 'juggle'){
        $('.partial_label_3D.juggle').show();
      } else if (dataset === 'tennis'){
        $('.partial_label_3D.tennis').show();
      } else if (dataset === 'robot_task'){
        $('.partial_label_3D.robot_task').show();
      } else if (dataset === 'apple_move'){
        $('.partial_label_3D.apple_move').show();
      } else if (dataset === 'cloth_pan'){
        $('.partial_label_3D.cloth_pan').show();
      }else {
        $('.partial_label_3D.pendulums').show();
      }
  
      // 重新初始化 twentytwenty 插件
      // 首先销毁所有 twentytwenty 实例
      $(".twentytwenty-container").twentytwenty('destroy');
  
      // 然后重新初始化可见的 twentytwenty-container
      $(".twentytwenty-container:visible").twentytwenty({default_offset_pct: 0.7});
  
      console.log('Selected dataset:', dataset);
    });
  
    // 页面加载时初始化所有可见的 twentytwenty-container
    $(".twentytwenty-container:visible").twentytwenty({default_offset_pct: 0.7});
  });
  