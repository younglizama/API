$("#enviar").click(function(){
    $.get("https://www.themealdb.com/api/json/v1/1/categories.php",
    function(data){
        $.each(data.categories,function(i,item){
            $("#categorias").append("<tr><td>"+item.idCategory+"</td><td>"+item.strCategory +
            "</td><td><img src='"+item.strCategoryThumb+"'>"+
            "</td><td>"+item.strCategoryDescription+"</td></tr>");
        });
    });
});