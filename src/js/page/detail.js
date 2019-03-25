require(['../js/config.js'], function() {
    require(['ajax'], function($) {

        init();

        function init() {
            actEvent();
            renderInfo(); //渲染首页
        }


        function actEvent() {
            document.querySelectorAll('#my li').on('click', function() {
                location.href = '../../pages/detail.html';
            })
        }

        function renderInfo() {
            ajax({
                url: 'api/getinfo',
                success: function(data) {
                    console.log(data);
                    render(data.data);
                }
            })
        };

        function render(data) {
            var html = '';
            data.forEach((item) => {
                html += `<li>
                        <p>
                            <img src="./img/${item.tou}" alt="">
                            <span>我是商家哦！</span>
                        </p>
                        <div class="info">
                            <div class="left">
                                <h4>${item.user}</h4>
                                <p>${item.title}</p>
                            </div>
                            <img src="./img/img.gif" alt="">
                        </div>
                    </li>`;
            });
            my.innerHTML = html;
        }


    });
});