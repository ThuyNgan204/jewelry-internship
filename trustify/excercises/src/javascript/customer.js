createAdmin();
createProduct();

/*PRODUCT*/
function createProduct() {
    if(localStorage.getItem('product')===null){
        var productArray = [
            {productId: 1, name: 'Vòng tay Vàng trắng Ý 18K', category: 'Vòng tay', price: 15400000, img: ['../assets/products/bracelet/sp-gv0000w060448-vong-tay-vang-y-18k-pnj-1.png', '../assets/products/bracelet/on-gv0000w060448-vong-tay-vang-y-18k-pnj-1.jpg', '../assets/products/bracelet/on-gv0000w060448-vong-tay-vang-y-18k-pnj-2.jpg', '../assets/products/bracelet/on-gv0000w060448-vong-tay-vang-y-18k-pnj-3.jpg'], description: 'Chiếc vòng tay LUXGEM sở hữu sự cứng cáp của vàng Ý 18K được chế tác tinh xảo, kết hợp các chi tiết đúc, châu và khắc theo công nghệ trang sức Ý, tạo nên sự sáng bóng và sang trọng. Với thiết kế độc lạ cùng ánh kim sắc sảo, sản phẩm sẽ tôn lên vẻ đẹp của các quý cô. Thêm vào đó, với thiết kế tinh xảo của vòng tay, nàng sẽ bất ngờ khi phối với các bộ trang phục như suit công sở hay những chiếc đầm dạo phố. Với các điểm nhấn trên sản phẩm, LUXGEM tin rằng nàng sẽ trở nên thật sự tỏa sáng và nổi bật khi trưng diện chúng.'},
            {productId: 2, name: 'Vòng tay Kim cương Vàng trắng 14K', category: 'Vòng tay', price: 80724000, img: ['../assets/products/bracelet/sp-gvddddw001257-vong-tay-kim-cuong-vang-trang-14k-pnj-beauty-the-beast-1.png'], description: 'Vòng tay chạm khắc tinh xảo với 1 viên kim cương chính và 82 viên kim cương nhỏ làm tôn lên vẻ đẹp quý phái của nàng.'},
            {productId: 3, name: 'Vòng tay Vàng 14K đính đá Morganite', category: 'Vòng tay', price: 130234000, img: ['../assets/products/bracelet/sp-gvmgddh000001-vong-tay-vang-14k-dinh-da-morganite-pnj-masterpiece-1.png'], description: 'Vòng tay được chế tác từ Vàng 14K, điểm nhấn là viên đá Morganite hồng trong suốt – đại diện cho vẻ đẹp nội tâm của người phụ nữ, nổi bật như một bí mật chỉ dành cho những ai đủ tinh tế để cảm nhận. Các chi tiết thả rơi tựa như chuyển động của thạch nhũ theo chiều rơi qua hàng triệu năm, kết hợp với những viên kim cương tinh xảo, tạo nên tổng thể bông tai mềm mại, nữ tính và thanh lịch.'},
            {productId: 4, name: 'Vòng tay Vàng 24K đính đá Aventurine', category: 'Vòng tay', price: 95911000, img: ['../assets/products/bracelet/sp-gvqtqty000001-vong-tay-vang-dinh-da-quartz-pnj-la-ngoc-canh-vang-10.png'], description: 'Lấy cảm hứng từ sự yêu thương và trân quý dành cho cô dâu trong khoảnh khắc thiêng liêng bước vào chương mới, chiếc vòng tay cưới vàng 24K đính đá Aventurine Lá Ngọc Cành Vàng là một biểu tượng hoàn hảo cho tình yêu và hạnh phúc. Với sự kết hợp hoàn hảo của vàng 24K cùng đá Aventurine màu xanh ngọc, chiếc vòng mang vẻ đẹp chân thật đầy cuốn hút.'},
            {productId: 5, name: 'Vòng tay Vàng trắng 14K đính đá Tanzanite', category: 'Vòng tay', price: 172100000, img: ['../assets/products/bracelet/sp-gvtzmxw000001-vong-tay-vang-trang-14k-dinh-da-tanzanite-pnj-masterpiece-1.png'], description: 'Vòng tay được chế tác từ Vàng Trắng 14K đính đá chủ Tanzanite quý hiếm biểu tượng cho sự bí ẩn và nổi bật bên những viên kim cương và sapphire xanh trải dài quanh chiếc vòng - biểu tượng của sự tự do, chuyển động và vĩnh cửu. Bàn tay nghệ nhân tỉ mỉ khắc họa nên Hạ Long không chỉ với vẻ đẹp hùng vĩ, mà còn là sự hài hòa giữa chuyển động và tĩnh tại, vẻ đẹp giao hòa giữa thiên nhiên và nghệ thuật, khiến ta không khỏi ngước nhìn, chiêm ngưỡng.'},
            {productId: 6, name: 'Vòng tay Vàng trắng 10K đính đá ECZ', category: 'Vòng tay', price: 14298000, img: ['../assets/products/bracelet/sp-gvxmxmw001458-vong-tay-vang-trang-10k-dinh-da-ecz-pnj-hello-kitty-1.png'], description: 'Tôn vinh vẻ đẹp kiêu sa của quý cô, chiếc vòng tay vàng 10K chắc chắn sẽ là điểm nhấn cho cả outfit. Sức hút riêng của thiết kế được kết tạo từ thiết kế cực kì duyên dáng với điểm nhấn đính đá ECZ cách điệu tinh xảo, tạo nên sản phẩm tinh tế chinh phục mọi ánh nhìn.'},
            {productId: 7, name: 'Vòng tay Bạc KUROMI', category: 'Vòng tay', price: 2250000, img: ['../assets/products/bracelet/sp-sv0000c000011-vong-tay-bac-dinh-da-pnjsilver-1.png'], description: 'Vòng tay bạc KUROMI mang tinh thần “Sweet but Sassy – Ngọt ngào nhưng đầy cá tính”, dành cho những cô gái dám thể hiện nhiều phiên bản của chính mình. Thiết kế dây cổ bạc kết hợp nét đáng yêu đặc trưng của Kuromi với chi tiết cá tính đầy nổi bật, tạo nên món trang sức vừa cute vừa mạnh mẽ. Mỗi chuyển động ánh lên vẻ tự tin, tinh nghịch nhưng không kém phần nữ tính. Đây là dây cổ giúp nàng khẳng định phong cách: ngọt ngào, cá tính và luôn dám khác biệt.'},
            {productId: 8, name: 'Vòng tay Bạc trẻ em đính đá', category: 'Vòng tay', price: 855000, img: ['../assets/products/bracelet/sp-sv0000w060035-vong-tay-tre-em-bac-dinh-da-pnjsilver-1.png'], description: 'Với sự kết hợp giữa các điểm nhấn dễ thương, vòng tay mang đến cho các nàng công chúa nhỏ chiếc vòng tay đáng yêu. Thêm một chút ngot ngào tô điểm vào vẻ đáng yêu của bé với chiếc vòng tay này, mẹ có thể tự do phối cùng những bộ trang phục khác nhau tùy theo sở thích của bé và giúp bé trở thành nàng công chúa nhỏ xinh.'},
            {productId: 9, name: 'Vòng tay Bạc EMOJI', category: 'Vòng tay', price: 1995000, img: ['../assets/products/bracelet/sp-sv0000y060009-vong-tay-bac-dinh-da-pnjsilver-01.png'], description: 'Không phải là món trang sức quá mới mẻ nhưng những chiếc vòng tay với kiểu dáng độc đáo đã cho thấy được sức mạnh của mình khi trở thành xu hướng được nhiều quý cô trưng diện. Sở hữu thiết kế mang dấu ấn của phong cách DIY, lắc tay được chế tác từ bạc Sterling tựa như điểm nhấn đầy sắc màu cho bộ cánh tiệc tùng, giúp nàng tự tin toả sáng trong niềm rộn ràng mùa lễ hội.'},
            {productId: 10, name: 'Vòng tay Bạc đính đá', category: 'Vòng tay', price: 2250000, img: ['../assets/products/bracelet/sp-svxmxmw000031-vong-tay-bac-dinh-da-style-by-pnj-1.png'], description: 'Lấy cảm hứng từ nét thơ mộng của Monet Garden, chiếc vòng tay bạc mang đến cảm giác nhẹ nhàng, thanh thoát, phù hợp với những cô nàng yêu sự tinh tế và lãng mạn. Bề mặt được chế tác tỉ mỉ, phản chiếu ánh sáng tinh khôi, khiến trang sức trở thành điểm nhấn nổi bật trong mọi khoảnh khắc.'},
            {productId: 11, name: 'Vòng tay Bạc đính đá tinh xảo', category: 'Vòng tay', price: 1095000, img: ['../assets/products/bracelet/sp-svxmxmw060032-vong-tay-bac-dinh-da-style-by-pnj-1.png'], description: 'Điểm tô cho cổ tay nàng với chiếc vòng bạc xinh xắn, đây chắc chắn sẽ là một nét chấm phá tinh tế tô điểm thêm nét cá tính, năng động và trẻ trung cho các cô gái. Tuy chỉ sở hữu thiết kế đơn giản với điểm nhấn đính đá nho nhỏ, nhưng nó lại là phụ kiện giúp các cô nàng có vẻ ngoài thanh lịch, nữ tính và trở nên nổi bật hơn bao giờ hết.'},
            {productId: 12, name: 'Dây chuyền Vàng trắng 18K lớn', category: 'Dây chuyền', price: 75644000, img: ['../assets/products/necklace/sp-gd0000w001470-day-chuyen-vang-trang-y-18k-pnj-1.png'], description: 'Bằng việc kết hợp chất liệu vàng 18K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 13, name: 'Dây chuyền Vàng trắng 18K nhỏ', category: 'Dây chuyền', price: 30944000, img: ['../assets/products/necklace/sp-gd0000w001489-day-chuyen-vang-trang-y-18k-pnj-1.png'], description: 'Bằng việc kết hợp chất liệu vàng 18K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 14, name: 'Dây chuyền Vàng trắng 10K', category: 'Dây chuyền', price: 3553000, img: ['../assets/products/necklace/sp-gd0000w001544-day-chuyen-kim-cuong-vang-trang-10k-pnj-1.png'], description: 'Bằng việc kết hợp chất liệu vàng 10K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 15, name: 'Dây chuyền Vàng trắng Ý 18K', category: 'Dây chuyền', price: 12865000, img: ['../assets/products/necklace/sp-gd0000w061365-day-chuyen-vang-trang-y-18k-pnj-1.png'], description: 'Bằng việc kết hợp chất liệu vàng 18K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 16, name: 'Dây chuyền Bạch kim đính Kim cương', category: 'Dây chuyền', price: 15990000, img: ['../assets/products/necklace/sp-pd0000w060027-day-chuyen-bach-kim-dinh-kim-cuong-pnj-1.png'], description: 'Bằng việc kết hợp chất liệu vàng 18K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 17, name: 'Dây chuyền Bạc Ý', category: 'Dây chuyền', price: 395000, img: ['../assets/products/necklace/sp-sd0000w060116-day-chuyen-bac-y-dinh-pnjsilver-1.png'], description: 'Bằng việc kết hợp chất liệu bạc cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 18, name: 'Dây chuyền Bạc Ý xoắn', category: 'Dây chuyền', price: 795000, img: ['../assets/products/necklace/sp-sd0000w060118-day-chuyen-bac-y-dinh-pnjsilver-1.png'], description: 'Bằng việc kết hợp chất liệu bạc cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 19, name: 'Dây chuyền Bạc Ý bản to', category: 'Dây chuyền', price: 2755000, img: ['../assets/products/necklace/sp-sd0000w060119-day-chuyen-bac-y-dinh-pnjsilver-1.png'], description: 'Bằng việc kết hợp chất liệu bạc cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 20, name: 'Dây chuyền Bạc Ý mắc nhỏ', category: 'Dây chuyền', price: 1785000, img: ['../assets/products/necklace/sp-sd0000w060120-day-chuyen-bac-y-dinh-pnjsilver-1.png'], description: 'Bằng việc kết hợp chất liệu bạc cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng. Dây đeo mảnh thích hợp với những bộ trang phục có nhiều họa tiết, đồng thời tạo điểm nhìn cân bằng với các phụ kiện to bản khác.'},
            {productId: 21, name: 'Nhẫn Vàng tắng 10K đính đá ECZ', category: 'Nhẫn', price: 2965000, img: ['../assets/products/ring/GNxm00w001007-nhan-vang-trang-10k-dinh-da-ecz-pnj-01.png'], description: 'Dù ở lứa tuổi nào, theo phong cách cổ điển hay hiện đại thì sắc màu của những viên đá ECZ màu trắng vẫn luôn biết ""chiều lòng"" các tín đồ thời trang. Mô phỏng nét kiêu sa của nàng, chiếc nhẫn vàng mới của LUXGEM nhẹ nhàng kết đính những viên đá trắng tròn trịa trên chất vàng 10K, mang đến sản phẩm đầy tinh tế, tôn lên nhan sắc của phái đẹp.'},
            {productId: 22, name: 'Cặp nhẫn cưới Vàng trắng 10K đính đá ECZ', category: 'Nhẫn', price: 15144000, img: ['../assets/products/ring/sp-cap-nhan-cuoi-vang-trang-10k-dinh-da-ecz-pnj-vang-son-00146-00106-1.png'], description: 'Cặp nhẫn cưới Vàng 10K đính đá ECZ là lựa chọn hoàn hảo cho những cặp đôi mong muốn có một biểu tượng tình yêu bền vững và đẳng cấp. Được chế tác từ vàng 10K, những chiếc nhẫn mang vẻ đẹp sang trọng và tinh tế, thể hiện sự quý giá của tình yêu.'},
            {productId: 23, name: 'Nhẫn cưới Kim cương Vàng 18K', category: 'Nhẫn', price: 8515000, img: ['../assets/products/ring/sp-GNDD00C000081-nhan-cuoi-kim-cuong-vang-18k-pnj-chung-doi-1.png'], description: 'Kim cương vốn là món trang sức mang đến niềm kiêu hãnh và cảm hứng thời trang bất tận. Sở hữu riêng cho mình món trang sức kim cương chính là điều mà ai cũng mong muốn. Chiếc nhẫn được chế tác từ vàng 18K cùng điểm nhấn kim cương với 57 giác cắt chuẩn xác, tạo nên món trang sức đầy sự sang trọng và đẳng cấp.'},
            {productId: 24, name: 'Cặp nhẫn cưới Kim cương vàng 18K', category: 'Nhẫn', price: 17771000, img: ['../assets/products/ring/sp-gndd00y000720-gndd00y000729-cap-nhan-cuoi-kim-cuong-vang-18k-pnj-chung-doi-1.png'], description: 'Vượt qua hành trình mài giũa dưới bàn tay của các nghệ nhân, kim cương gắn liền với biểu tượng của tình yêu thủy chung, son sắt. Với sắc vàng 18K rực rỡ cùng vẻ đẹp lấp lánh và tinh khiết của kim cương, LUXGEM mang đến nhẫn vàng hiện đại nhưng vẫn giữ được nét truyền thống vốn có.'},
            {productId: 25, name: 'Nhẫn Vàng 10K đính đá ECZ', category: 'Nhẫn', price: 3885000, img: ['../assets/products/ring/sp-gnxm00h000047-nhan-vang-10k-dinh-da-ecz-pnj-1.png'], description: 'Dù ở lứa tuổi nào, theo phong cách cổ điển hay hiện đại thì sắc màu của những viên đá ECZ màu trắng vẫn luôn biết ""chiều lòng"" các tín đồ thời trang. Mô phỏng nét kiêu sa của nàng, chiếc nhẫn vàng mới của LUXGEM nhẹ nhàng kết đính những viên đá trắng tròn trịa trên chất vàng 10K, mang đến sản phẩm đầy tinh tế, tôn lên nhan sắc của phái đẹp.'},
            {productId: 26, name: 'Nhẫn Vàng trắng 10K đính đá ECZ', category: 'Nhẫn', price: 4796000, img: ['../assets/products/ring/sp-gnxmxmw000121-nhan-vang-trang-10k-dinh-da-ecz-pnj-1.png'], description: 'Dù ở lứa tuổi nào, theo phong cách cổ điển hay hiện đại thì sắc màu của những viên đá ECZ màu trắng vẫn luôn biết chiều lòng các tín đồ thời trang. Mô phỏng nét kiêu sa của nàng, chiếc nhẫn vàng mới của LUXGEM nhẹ nhàng kết đính những viên đá trắng tròn trịa trên chất vàng 10K, mang đến sản phẩm đầy tinh tế, tôn lên nhan sắc của phái đẹp.'},
            {productId: 27, name: 'Nhẫn Bạc', category: 'Nhẫn', price: 395000, img: ['../assets/products/ring/sp-sn0000w060028-nhan-bac-dinh-da-pnjsilver-1.png'], description: 'Hãy khám phá và để những thiết kế rực rỡ đầy màu sắc của truyền cảm hứng cho bạn kể câu chuyện mang đậm chất riêng của mình một cách đầy thú vị. Sở hữu thiết kế độc đáo với những điểm nhấn đá đầy màu sắc lấp lánh, chiếc nhẫn bạc STYLE By LUXGEM sẽ tôn lên vẻ đẹp cá tính và tinh tế của nàng xinh.'},
            {productId: 28, name: 'Nhẫn Bạc đính đá Friendzone', category: 'Nhẫn', price: 512000, img: ['../assets/products/ring/sp-snnhxmk000007-nhan-bac-pnjsilver-friendzone-breaker-1.png'], description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách, giúp các cô gái trông thật nổi bật.'},
            {productId: 29, name: 'Nhẫn Bạc đính đá Flower', category: 'Nhẫn', price: 455000, img: ['../assets/products/ring/sp-snxmxmw000147-nhan-bac-dinh-da-pnjsilver-1.png'], description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách, giúp các cô gái trông thật nổi bật.'},
            {productId: 30, name: 'Nhẫn Bạc đính đá Couple', category: 'Nhẫn', price: 595000, img: ['../assets/products/ring/sp-snxmxmw060167-nhan-bac-dinh-da-pnjsilver-1.png'], description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách, giúp các cô gái trông thật nổi bật.'},
            {productId: 31, name: 'Nhẫn Bạc Love', category: 'Nhẫn', price: 385000, img: ['../assets/products/ring/sp-snxmxmw060191-nhan-bac-dinh-da-pnjsilver-1,png'], description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách, giúp các cô gái trông thật nổi bật.'},
            {productId: 32, name: 'Nhẫn Bạc đính đá', category: 'Nhẫn', price: 455000, img: ['../assets/products/ring/sp-snxmxmw060215-nhan-bac-dinh-da-pnjsilver-1.png'], description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách, giúp các cô gái trông thật nổi bật.'},
            {productId: 33, name: 'Đồng hồ Daniel Wellington Nữ', category: 'Đồng hồ', price: 4440000, img: ['../assets/products/watch/DW00100434_Desktop_1.jpg'], description: 'Daniel Wellington - Thương hiệu Đồng hồ Thụy Điển, đại diện cho phong cách tối giản, kết hợp với sự tinh tế và cổ điển để từ đó tạo nên những món phụ kiện thời trang thanh lịch, trang nhã và thời thượng. Đến nay thương hiệu này vẫn luôn đứng đầu là một trong những thương hiệu Đồng hồ và Trang sức được yêu thích trên toàn cầu.'},
            {productId: 34, name: 'Đồng hồ Fossil Nữ Dây da', category: 'Đồng hồ', price: 3930000, img: ['../assets/products/watch/ES4813_Desktop_1.jpg'], description: 'Đồng Hồ Fossil Nữ Dây Da là sự kết hợp tuyệt vời giữa phong cách cổ điển và sự tinh tế hiện đại, mang đến cho phái đẹp một phụ kiện không thể thiếu trong bộ sưu tập của mình. Dây đồng hồ được làm từ da thật, mềm mại nhưng vô cùng bền bỉ. Chất liệu da tự nhiên không chỉ mang đến cảm giác thoải mái khi đeo mà còn giúp tăng cường sự sang trọng, cổ điển cho chiếc đồng hồ.'},
            {productId: 35, name: 'Đồng hồ Disney Watch Nữ Dây kim loại 25 mm', category: 'Đồng hồ', price: 2050000, img: ['../assets/products/watch/sp-wfdiqfw0m25.0019-dong-ho-disney-watch-nu-mk-11626w-day-kim-loai-25-mm-1.png'], description: 'Khám phá sự kết hợp hoàn hảo giữa phong cách thời trang và vẻ đẹp dễ thương của các nhân vật Disney với Đồng hồ Disney Watch Nữ Dây Kim Loại. Đồng hồ sở hữu thiết kế đặc biệt dành cho những tín đồ yêu thích vẻ đẹp độc đáo và cá tính của các nhân vật hoạt hình Disney kết hợp với dây kim loại chắc chắn và sang trọng.'},
            {productId: 36, name: 'Đồng hồ Disney Watch Nữ Dây kim loại 28 mm', category: 'Đồng hồ', price: 2050000, img: ['../assets/products/watch/sp-wfdiqfw0m28.0027-dong-ho-disney-watch-nu-pr-21014s1-day-kim-loai-28-mm-1.png'], description: 'Khám phá sự kết hợp hoàn hảo giữa phong cách thời trang và vẻ đẹp dễ thương của các nhân vật Disney với Đồng hồ Disney Watch Nữ Dây Kim Loại. Đồng hồ sở hữu thiết kế đặc biệt dành cho những tín đồ yêu thích vẻ đẹp độc đáo và cá tính của các nhân vật hoạt hình Disney kết hợp với dây kim loại chắc chắn và sang trọng.'},
            {productId: 37, name: 'Đồng hồ Fossil Carlie Nữ Dây da 28 mm', category: 'Đồng hồ', price: 3970000, img: ['../assets/products/watch/sp-wfo00000554-dong-ho-fossil-carlie-nu-es5295-day-da-28-mm-1.png'], description: 'Đồng Hồ Fossil Nữ Dây Da là sự kết hợp tuyệt vời giữa phong cách cổ điển và sự tinh tế hiện đại, mang đến cho phái đẹp một phụ kiện không thể thiếu trong bộ sưu tập của mình. Dây đồng hồ được làm từ da thật, mềm mại nhưng vô cùng bền bỉ. Chất liệu da tự nhiên không chỉ mang đến cảm giác thoải mái khi đeo mà còn giúp tăng cường sự sang trọng, cổ điển cho chiếc đồng hồ.'},
            {productId: 38, name: 'Đồng hồ Daniel Wellington Nữ Dây thép không gỉ 26 mm', category: 'Đồng hồ', price: 4970000, img: ['../assets/products/watch/T058.109.11.041.00_Desktop_1.jpg'], description: 'Daniel Wellington - Thương hiệu Đồng hồ Thụy Điển, đại diện cho phong cách tối giản, kết hợp với sự tinh tế và cổ điển để từ đó tạo nên những món phụ kiện thời trang thanh lịch, trang nhã và thời thượng. Đến nay thương hiệu này vẫn luôn đứng đầu là một trong những thương hiệu Đồng hồ và Trang sức được yêu thích trên toàn cầu.'},
            {productId: 39, name: 'Đồng hồ Tissot T-Lady Nữ', category: 'Đồng hồ', price: 13690000, img: ['../assets/products/watch/T058.109.33.456.00_Desktop_1.jpg'], description: 'Đồng Hồ Tissot T-Lady Nữ Dây Thép Không Gỉ là mẫu đồng hồ nữ đẳng cấp, kết hợp hoàn hảo giữa thiết kế tinh tế và chất liệu cao cấp. Với dây thép không gỉ bền bỉ, đồng hồ này mang lại vẻ đẹp sáng bóng và chắc chắn, đồng thời tạo cảm giác thoải mái và dễ chịu khi đeo.'},
            {productId: 40, name: 'Đồng hồ Fossil Nữ Dây thép không gỉ 35 mm', category: 'Đồng hồ', price: 4890000, img: ['../assets/products/watch/WFO00000135-ES4301_Desktop_1.jpg'], description: 'Đồng hồ Fossil Nữ Dây Thép Không Gỉ là một lựa chọn hoàn hảo cho những cô nàng yêu thích sự kết hợp giữa phong cách cổ điển và hiện đại. Với thiết kế thanh lịch, chiếc đồng hồ này mang đến vẻ đẹp sang trọng và tinh tế, phù hợp với nhiều dịp khác nhau, từ công sở đến những buổi tiệc sang trọng. Dây đồng hồ được làm từ thép không gỉ chất lượng cao, không chỉ bền bỉ và chống oxy hóa mà còn mang lại cảm giác thoải mái khi đeo.'},
            {productId: 41, name: 'Đồng hồ Fossil Nữ Dây da 28 mm', category: 'Đồng hồ', price: 3080000, img: ['../assets/products/watch/WFO00000296-ES4502_Desktop_1.jpg'], description: 'Đồng Hồ Fossil Nữ Dây Da là sự kết hợp tuyệt vời giữa phong cách cổ điển và sự tinh tế hiện đại, mang đến cho phái đẹp một phụ kiện không thể thiếu trong bộ sưu tập của mình. Dây đồng hồ được làm từ da thật, mềm mại nhưng vô cùng bền bỉ. Chất liệu da tự nhiên không chỉ mang đến cảm giác thoải mái khi đeo mà còn giúp tăng cường sự sang trọng, cổ điển cho chiếc đồng hồ.'},
            {productId: 42, name: 'Đồng hồ Skagen Nữ Dây thép không gỉ 26 mm', category: 'Đồng hồ', price: 4120000, img: ['../assets/products/watch/wkf33b03545.100-skw2665-dong-ho-thoi-trang-nu-day-thep-khong-gi-chong-nuoc-skagen.png'], description: 'Đồng hồ Skagen nữ dây thép không gỉ là một biểu tượng của sự tinh tế và thanh lịch, mang đến cho người sở hữu không chỉ công năng tuyệt vời mà còn là một phụ kiện thời trang hoàn hảo. Mặt đồng hồ với các chi tiết tinh tế, giúp bạn cảm thấy thoải mái và tự tin mỗi khi đeo. Sự kết hợp giữa dây thép không gỉ và mặt đồng hồ mỏng nhẹ tạo nên vẻ đẹp nhẹ nhàng, thanh thoát nhưng không kém phần sang trọng.'},
            {productId: 43, name: 'Đồng hồ Tissot T-lady Nữ Dây da 26 mm', category: 'Đồng hồ', price: 14060000, img: ['../assets/products/watch/WTI00000627-T126.010.36.013.00_Desktop_1.jpg'], description: 'Đồng Hồ Tissot T-Lady Nữ Dây Da là sự lựa chọn hoàn hảo cho phái đẹp yêu thích sự tinh tế và thanh lịch. Với thiết kế mặt đồng hồ cổ điển, chiếc đồng hồ này mang đến vẻ đẹp sang trọng và nữ tính. Dây da cao cấp mềm mại, vừa vặn ôm tay, tạo cảm giác thoải mái khi đeo suốt cả ngày.'},
        ];
        localStorage.setItem('product',JSON.stringify(productArray));
    }
}

function showProduct() {
    var productList = document.getElementById('product-list');
    var products = JSON.parse(localStorage.getItem('product'));

    productList.innerHTML = '';

    products.forEach(function(item) {
        productList.innerHTML += `
            <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px">
                <img src="${item.img[0]}" width="150">
                <p><b>${item.name}</b></p>
                <p>Giá: ${item.price.toLocaleString()} VND</p>
            </div>
        `;
    });
}

/*USER*/
function createAdmin() {
    if(localStorage.getItem('user')===null){
        var userArray = [];
        var admin = {username: 'admin', password: 'admin', fullname: 'Team Ngân Trí', address: 'Lam Sơn, Tân Bình, TP HCM', phone: '0354682931' };
        userArray.push(admin);
        localStorage.setItem('user', JSON.stringify(userArray));
    }
}
function showForm() {
    var userform = document.getElementById('user');
    userform.style.display= 'block';
    resetAuthForm();

    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
}
function closeForm() {
    var userform= document.getElementById('user');
    userform.style.display= 'none';
    resetAuthForm();
}
function resetAuthForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();

    const errors = document.querySelectorAll(
        '#loginForm div[id$="Error"], #signupForm div[id$="Error"]'
    );
    errors.forEach(err => {
        err.style.display = 'none';
    })
}
function showSignup() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
}
function showLogin() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
document.getElementById('signupForm').addEventListener('submit', createUser);
document.getElementById('loginForm').addEventListener('submit', login);
function createUser(e) {
    e.preventDefault();
    var fullname = document.getElementById('fullname');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var username = document.getElementById('usernameSignup');
    var password = document.getElementById('passwordSignup');
    var password2 = document.getElementById('passwordSignup2');
    var flag = true;
    if(!fullname.value){
        document.getElementById('fullnameError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('fullnameError').style.display = 'none';
    }
    if(!address.value){
        document.getElementById('addressError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('addressError').style.display = 'none';
    }
    if(!phone.value){
        document.getElementById('phoneError').style.display = 'block';
        flag = false;
    }else{
        if(isNaN(Number(phone.value))){
            document.getElementById('phoneError').style.display = 'block';
            document.getElementById('phoneError').innerHTML = 'Số điện thoại không hợp lệ.';
            flag = false;
        }else{
            let phoneNum = Number(phone.value);
            let secondChar = phone.value[1];
            let validNum = ['3', '5', '7', '8', '9'];

            if(phoneNum < 100000000 || phoneNum > 999999999 || phone.value.length !== 10 || phone.value[0] !== '0' || !validNum.includes(secondChar)){
                document.getElementById('phoneError').style.display = 'block';
                document.getElementById('phoneError').innerHTML = 'Số điện thoại không đúng.';
                flag = false;
            }else{
                document.getElementById('phoneError').style.display = 'none';
            }
        }
    }
    if(!username.value){
        document.getElementById('usernameSignupError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('usernameSignupError').style.display = 'none';
    }
    if(!password.value){
        document.getElementById('passwordSignupError').style.display = 'block';
        flag = false;
    }else{
        if(password.value.length < 8){
            document.getElementById('passwordSignupError').style.display = 'block';
            document.getElementById('passwordSignupError').innerHTML = 'Mật khẩu phải từ 8 ký tự.';
            flag = false;
        }else{
            document.getElementById('passwordSignupError').style.display = 'none';
        }
    }
    if(password2.value !== password.value){
        document.getElementById('passwordSignup2Error').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('passwordSignup2Error').style.display = 'none';
    }
    if(flag == false){
        return false;
    }
    var d = new Date();
    var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    var user = {username: username.value, password: password.value, fullname: fullname.value, address: address.value, phone: phone.value, datesignup: datesignup}
    var userArray = JSON.parse(localStorage.getItem('user'));
    for(var i = 0; i < userArray.length; i++){
        if(user.username == userArray[i].username){
            document.getElementById('usernameSignupError').style.display = 'block';
            document.getElementById('usernameSignupError').innerHTML = 'Tên đăng nhập đã có người sử dụng.';
            username.focus();
            return false;
        }
    }
    userArray.push(user);
    localStorage.setItem('user', JSON.stringify(userArray));
    localStorage.setItem('userLogin', JSON.stringify(user));
    customAlert('Bạn đã đăng ký thành công!', 'success');
    closeForm();
    setTimeout(() => {
        window.location.reload();
    }, 10);
}
function login(e) {
    e.preventDefault();
    var username = document.getElementById('usernameLogin').value;
    var password = document.getElementById('passwordLogin').value;
    var flag = true;
    if(!username){
        document.getElementById('usernameError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('usernameError').style.display = 'none';
    }
    if(!password){
        document.getElementById('passwordError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('passwordError').style.display = 'none';
    }
    if(flag == false){
        return false;
    }
    var userArray = JSON.parse(localStorage.getItem('user'));
    for(var i = 0; i < userArray.length; i++){
        if(username == userArray[i].username){
            if(password == userArray[i].password){
                closeForm();
                localStorage.setItem('userLogin', JSON.stringify(userArray[i]));
                window.location.reload(true);
                return true;
            }
        }
    }
    document.getElementById('passwordError').style.display = 'block';
    document.getElementById('passwordError').innerHTML = 'Sai thông tin đăng nhập.';
    return false;
}
function logout(url){
    localStorage.removeItem('userLogin');
    location.href = url;
}
function checkLogin(){
    if(localStorage.getItem('userLogin')){
        var user = JSON.parse(localStorage.getItem('userLogin'));
        var i = '';
        if(user.username == 'admin'){
            i = '<li><button>Hello, '+user.username+'</button><button id="btnLogout" onclick="logout(\'../pages/index.html\')">Đăng xuất</button></li>'+
                '<li><img src="../assets/icon/setting.svg" alt="setting icon"/></li>'+
                '<li><img src="../assets/icon/cart.svg" alt="cart icon"/></li>'+
                '<li><img src="../assets/icon/search.svg" alt="search icon"/></li>';
        }else{
            i = '<li><button>Hello, '+user.username+'</button><button id="btnLogout" onclick="logout(\'index.html\')">Đăng xuất</button></li>'+
                '<li><img src="../assets/icon/cart.svg" alt="cart icon"/></li>'+
                '<li><img src="../assets/icon/search.svg" alt="search icon"/></li>';
        }
        document.querySelector('header ul').innerHTML = i;
        
    }
}

/*CUSTOM ALERT*/
function customAlert(message, type){
    if(type == 'success'){
        document.getElementById("customAlert").style.backgroundColor = '#4CAF50';
    }
    if(type == 'warning'){
        document.getElementById("customAlert").style.backgroundColor = '#f44336';  
    }
    document.getElementById("customAlert").innerHTML = message;
    var x = document.getElementById("customAlert");
    x.className = "show";
    setTimeout(
        function() {
            x.className = x.classList.remove("show");
        }, 3500
    );
}

/*Banner*/
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName('slideShow');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';

    setTimeout(showSlides, 3000);
}

showSlides();



document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        const error = input.nextElementSibling;
        if (error && error.id.includes('Error')){
            error.style.display = 'none';
        }
    })
})
