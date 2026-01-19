createUsers();
createProducts();

// Filter Array
let filteredProducts = [];

// Product Key
const PRODUCT_KEY = 'products';

// Pagination variables
let currentPage = 1;
const itemsPerPage = 10;

// Create Users
function createUsers() {
    if (!localStorage.getItem("users")) {
        const users = [
            {
                id: 1,
                username: "admin",
                email: "admin@gmail.com",
                password: "admin",
                role: "admin"
            },
            {
                id: 2,
                username: "user",
                email: "user@gmail.com",
                password: "user",
                role: "user"
            }
        ];

        localStorage.setItem("users", JSON.stringify(users));
    }
}

//Create Products
function createProducts() {
    if (!localStorage.getItem('products')) {
        var productArray = [
            {productId: 1, name: 'Vòng tay Vàng trắng Ý 18K', category: 'bracelet', price: 15400000, img: '../assets/products/bracelet/sp-gv0000w060448-vong-tay-vang-y-18k-pnj-1.png', description: 'Chiếc vòng tay LUXGEM sở hữu sự cứng cáp của vàng Ý 18K được chế tác tinh xảo, kết hợp các chi tiết đúc, châu và khắc theo công nghệ trang sức Ý, tạo nên sự sáng bóng và sang trọng. Với thiết kế độc lạ cùng ánh kim sắc sảo, sản phẩm sẽ tôn lên vẻ đẹp của các quý cô.'},
            {productId: 2, name: 'Vòng tay Kim cương Vàng trắng 14K', category: 'bracelet', price: 80724000, img: '../assets/products/bracelet/sp-gvddddw001257-vong-tay-kim-cuong-vang-trang-14k-pnj-beauty-the-beast-1.png', description: 'Vòng tay chạm khắc tinh xảo với 1 viên kim cương chính và 82 viên kim cương nhỏ làm tôn lên vẻ đẹp quý phái của nàng.'},
            {productId: 3, name: 'Vòng tay Vàng 14K đính đá Morganite', category: 'bracelet', price: 130234000, img: '../assets/products/bracelet/sp-gvmgddh000001-vong-tay-vang-14k-dinh-da-morganite-pnj-masterpiece-1.png', description: 'Vòng tay được chế tác từ Vàng 14K, điểm nhấn là viên đá Morganite hồng trong suốt – đại diện cho vẻ đẹp nội tâm của người phụ nữ, nổi bật như một bí mật chỉ dành cho những ai đủ tinh tế để cảm nhận.'},
            {productId: 4, name: 'Vòng tay Vàng 24K đính đá Aventurine', category: 'bracelet', price: 95911000, img: '../assets/products/bracelet/sp-gvqtqty000001-vong-tay-vang-dinh-da-quartz-pnj-la-ngoc-canh-vang-10.png', description: 'Lấy cảm hứng từ sự yêu thương và trân quý dành cho cô dâu trong khoảnh khắc thiêng liêng bước vào chương mới, chiếc vòng tay cưới vàng 24K đính đá Aventurine Lá Ngọc Cành Vàng là một biểu tượng hoàn hảo cho tình yêu và hạnh phúc.'},
            {productId: 5, name: 'Vòng tay Vàng trắng 14K đính đá Tanzanite', category: 'bracelet', price: 172100000, img: '../assets/products/bracelet/sp-gvtzmxw000001-vong-tay-vang-trang-14k-dinh-da-tanzanite-pnj-masterpiece-1.png', description: 'Vòng tay được chế tác từ Vàng Trắng 14K đính đá chủ Tanzanite quý hiếm biểu tượng cho sự bí ẩn và nổi bật bên những viên kim cương và sapphire xanh trải dài quanh chiếc vòng.'},
            {productId: 6, name: 'Vòng tay Vàng trắng 10K đính đá ECZ', category: 'bracelet', price: 14298000, img: '../assets/products/bracelet/sp-gvxmxmw001458-vong-tay-vang-trang-10k-dinh-da-ecz-pnj-hello-kitty-1.png', description: 'Tôn vinh vẻ đẹp kiêu sa của quý cô, chiếc vòng tay vàng 10K chắc chắn sẽ là điểm nhấn cho cả outfit.'},
            {productId: 7, name: 'Vòng tay Bạc KUROMI', category: 'bracelet', price: 2250000, img: '../assets/products/bracelet/sp-sv0000c000011-vong-tay-bac-dinh-da-pnjsilver-1.png', description: 'Vòng tay bạc KUROMI mang tinh thần "Sweet but Sassy – Ngọt ngào nhưng đầy cá tính", dành cho những cô gái dám thể hiện nhiều phiên bản của chính mình.'},
            {productId: 8, name: 'Vòng tay Bạc trẻ em đính đá', category: 'bracelet', price: 855000, img: '../assets/products/bracelet/sp-sv0000w060035-vong-tay-tre-em-bac-dinh-da-pnjsilver-1.png', description: 'Với sự kết hợp giữa các điểm nhấn dễ thương, vòng tay mang đến cho các nàng công chúa nhỏ chiếc vòng tay đáng yêu.'},
            {productId: 9, name: 'Vòng tay Bạc EMOJI', category: 'bracelet', price: 1995000, img: '../assets/products/bracelet/sp-sv0000y060009-vong-tay-bac-dinh-da-pnjsilver-01.png', description: 'Không phải là món trang sức quá mới mẻ nhưng những chiếc vòng tay với kiểu dáng độc đáo đã cho thấy được sức mạnh của mình khi trở thành xu hướng được nhiều quý cô trưng diện.'},
            {productId: 10, name: 'Vòng tay Bạc đính đá', category: 'bracelet', price: 2250000, img: '../assets/products/bracelet/sp-svxmxmw000031-vong-tay-bac-dinh-da-style-by-pnj-1.png', description: 'Lấy cảm hứng từ nét thơ mộng của Monet Garden, chiếc vòng tay bạc mang đến cảm giác nhẹ nhàng, thanh thoát, phù hợp với những cô nàng yêu sự tinh tế và lãng mạn.'},
            {productId: 11, name: 'Vòng tay Bạc đính đá tinh xảo', category: 'bracelet', price: 1095000, img: '../assets/products/bracelet/sp-svxmxmw060032-vong-tay-bac-dinh-da-style-by-pnj-1.png', description: 'Điểm tô cho cổ tay nàng với chiếc vòng bạc xinh xắn, đây chắc chắn sẽ là một nét chấm phá tinh tế tô điểm thêm nét cá tính, năng động và trẻ trung cho các cô gái.'},
            {productId: 12, name: 'Dây chuyền Vàng trắng 18K lớn', category: 'necklace', price: 75644000, img: '../assets/products/necklace/sp-gd0000w001470-day-chuyen-vang-trang-y-18k-pnj-1.png', description: 'Bằng việc kết hợp chất liệu vàng 18K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 13, name: 'Dây chuyền Vàng trắng 18K nhỏ', category: 'necklace', price: 30944000, img: '../assets/products/necklace/sp-gd0000w001489-day-chuyen-vang-trang-y-18k-pnj-1.png', description: 'Bằng việc kết hợp chất liệu vàng 18K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 14, name: 'Dây chuyền Vàng trắng 10K', category: 'necklace', price: 3553000, img: '../assets/products/necklace/sp-gd0000w001544-day-chuyen-kim-cuong-vang-trang-10k-pnj-1.png', description: 'Bằng việc kết hợp chất liệu vàng 10K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 15, name: 'Dây chuyền Vàng trắng Ý 18K', category: 'necklace', price: 12865000, img: '../assets/products/necklace/sp-gd0000w061365-day-chuyen-vang-trang-y-18k-pnj-1.png', description: 'Bằng việc kết hợp chất liệu vàng 18K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 16, name: 'Dây chuyền Bạch kim đính Kim cương', category: 'necklace', price: 15990000, img: '../assets/products/necklace/sp-pd0000w060027-day-chuyen-bach-kim-dinh-kim-cuong-pnj-1.png', description: 'Bằng việc kết hợp chất liệu vàng 18K cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 17, name: 'Dây chuyền Bạc Ý', category: 'necklace', price: 395000, img: '../assets/products/necklace/sp-sd0000w060116-day-chuyen-bac-y-dinh-pnjsilver-1.png', description: 'Bằng việc kết hợp chất liệu bạc cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 18, name: 'Dây chuyền Bạc Ý xoắn', category: 'necklace', price: 795000, img: '../assets/products/necklace/sp-sd0000w060118-day-chuyen-bac-y-dinh-pnjsilver-1.png', description: 'Bằng việc kết hợp chất liệu bạc cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 19, name: 'Dây chuyền Bạc Ý bản to', category: 'necklace', price: 2755000, img: '../assets/products/necklace/sp-sd0000w060119-day-chuyen-bac-y-dinh-pnjsilver-1.png', description: 'Bằng việc kết hợp chất liệu bạc cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 20, name: 'Dây chuyền Bạc Ý mắc nhỏ', category: 'necklace', price: 1785000, img: '../assets/products/necklace/sp-sd0000w060120-day-chuyen-bac-y-dinh-pnjsilver-1.png', description: 'Bằng việc kết hợp chất liệu bạc cùng thiết kế tinh tế, sợi dây chuyền chính là điểm nhấn nổi bật, tô điểm thêm vẻ đẹp thanh lịch và duyên dáng cho nàng.'},
            {productId: 21, name: 'Nhẫn Vàng tắng 10K đính đá ECZ', category: 'ring', price: 2965000, img: '../assets/products/ring/GNxm00w001007-nhan-vang-trang-10k-dinh-da-ecz-pnj-01.png', description: 'Dù ở lứa tuổi nào, theo phong cách cổ điển hay hiện đại thì sắc màu của những viên đá ECZ màu trắng vẫn luôn biết "chiều lòng" các tín đồ thời trang.'},
            {productId: 22, name: 'Cặp nhẫn cưới Vàng trắng 10K đính đá ECZ', category: 'ring', price: 15144000, img: '../assets/products/ring/sp-cap-nhan-cuoi-vang-trang-10k-dinh-da-ecz-pnj-vang-son-00146-00106-1.png', description: 'Cặp nhẫn cưới Vàng 10K đính đá ECZ là lựa chọn hoàn hảo cho những cặp đôi mong muốn có một biểu tượng tình yêu bền vững và đẳng cấp.'},
            {productId: 23, name: 'Nhẫn cưới Kim cương Vàng 18K', category: 'ring', price: 8515000, img: '../assets/products/ring/sp-GNDD00C000081-nhan-cuoi-kim-cuong-vang-18k-pnj-chung-doi-1.png', description: 'Kim cương vốn là món trang sức mang đến niềm kiêu hãnh và cảm hứng thời trang bất tận.'},
            {productId: 24, name: 'Cặp nhẫn cưới Kim cương vàng 18K', category: 'ring', price: 17771000, img: '../assets/products/ring/sp-gndd00y000720-gndd00y000729-cap-nhan-cuoi-kim-cuong-vang-18k-pnj-chung-doi-1.png', description: 'Vượt qua hành trình mài giũa dưới bàn tay của các nghệ nhân, kim cương gắn liền với biểu tượng của tình yêu thủy chung, son sắt.'},
            {productId: 25, name: 'Nhẫn Vàng 10K đính đá ECZ', category: 'ring', price: 3885000, img: '../assets/products/ring/sp-gnxm00h000047-nhan-vang-10k-dinh-da-ecz-pnj-1.png', description: 'Dù ở lứa tuổi nào, theo phong cách cổ điển hay hiện đại thì sắc màu của những viên đá ECZ màu trắng vẫn luôn biết "chiều lòng" các tín đồ thời trang.'},
            {productId: 26, name: 'Nhẫn Vàng trắng 10K đính đá ECZ', category: 'ring', price: 4796000, img: '../assets/products/ring/sp-gnxmxmw000121-nhan-vang-trang-10k-dinh-da-ecz-pnj-1.png', description: 'Dù ở lứa tuổi nào, theo phong cách cổ điển hay hiện đại thì sắc màu của những viên đá ECZ màu trắng vẫn luôn biết chiều lòng các tín đồ thời trang.'},
            {productId: 27, name: 'Nhẫn Bạc', category: 'ring', price: 395000, img: '../assets/products/ring/sp-sn0000w060028-nhan-bac-dinh-da-pnjsilver-1.png', description: 'Hãy khám phá và để những thiết kế rực rỡ đầy màu sắc của truyền cảm hứng cho bạn kể câu chuyện mang đậm chất riêng của mình một cách đầy thú vị.'},
            {productId: 28, name: 'Nhẫn Bạc đính đá Friendzone', category: 'ring', price: 512000, img: '../assets/products/ring/sp-snnhxmk000007-nhan-bac-pnjsilver-friendzone-breaker-1.png', description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách.'},
            {productId: 29, name: 'Nhẫn Bạc đính đá Flower', category: 'ring', price: 455000, img: '../assets/products/ring/sp-snxmxmw000147-nhan-bac-dinh-da-pnjsilver-1.png', description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách.'},
            {productId: 30, name: 'Nhẫn Bạc đính đá Couple', category: 'ring', price: 595000, img: '../assets/products/ring/sp-snxmxmw060167-nhan-bac-dinh-da-pnjsilver-1.png', description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách.'},
            {productId: 31, name: 'Nhẫn Bạc Love', category: 'ring', price: 385000, img: '../assets/products/ring/sp-snxmxmw060191-nhan-bac-dinh-da-pnjsilver-1.png', description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách.'},
            {productId: 32, name: 'Nhẫn Bạc đính đá', category: 'ring', price: 455000, img: '../assets/products/ring/sp-snxmxmw060215-nhan-bac-dinh-da-pnjsilver-1.png', description: 'Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5, LUXGEM mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách.'},
            {productId: 33, name: 'Đồng hồ Nam Dây da Fossil', category: 'watch', price: 7248000, img: '../assets/products/watch/dong-ho-nam-day-da-fossil-me3099.png', description: 'Đồng Hồ Fossil Nam Dây Da là một sản phẩm hoàn hảo dành cho những quý ông yêu thích sự kết hợp giữa phong cách cổ điển và hiện đại.'},
            {productId: 34, name: 'Đồng hồ Casio Nam Dây thép không gỉ 49 mm', category: 'watch', price: 3529000, img: '../assets/products/watch/dong-ho-nam-day-thep-cao-cap-khong-gi-316l-casio-efv-540d-1avudf.png', description: 'Thích sự thanh lịch, tinh tế và độ bền vượt trội. Với thiết kế hiện đại, sang trọng cùng mặt số rõ ràng, dễ đọc kết hợp với kim chỉ và vạch số sắc nét.'},
            {productId: 35, name: 'Đồng hồ Disney Watch Nữ Dây kim loại 25 mm', category: 'watch', price: 2050000, img: '../assets/products/watch/sp-wfdiqfw0m25.0019-dong-ho-disney-watch-nu-mk-11626w-day-kim-loai-25-mm-1.png', description: 'Khám phá sự kết hợp hoàn hảo giữa phong cách thời trang và vẻ đẹp dễ thương của các nhân vật Disney với Đồng hồ Disney Watch Nữ Dây Kim Loại.'},
            {productId: 36, name: 'Đồng hồ Disney Watch Nữ Dây kim loại 28 mm', category: 'watch', price: 2050000, img: '../assets/products/watch/sp-wfdiqfw0m28.0027-dong-ho-disney-watch-nu-pr-21014s1-day-kim-loai-28-mm-1.png', description: 'Khám phá sự kết hợp hoàn hảo giữa phong cách thời trang và vẻ đẹp dễ thương của các nhân vật Disney với Đồng hồ Disney Watch Nữ Dây Kim Loại.'},
            {productId: 37, name: 'Đồng hồ Fossil Carlie Nữ Dây da 28 mm', category: 'watch', price: 3970000, img: '../assets/products/watch/sp-wfo00000554-dong-ho-fossil-carlie-nu-es5295-day-da-28-mm-1.png', description: 'Đồng Hồ Fossil Nữ Dây Da là sự kết hợp tuyệt vời giữa phong cách cổ điển và sự tinh tế hiện đại, mang đến cho phái đẹp một phụ kiện không thể thiếu.'},
            {productId: 38, name: 'Đồng hồ Citizen Nam Dây thép không gỉ 40 mm', category: 'watch', price: 6185000, img: '../assets/products/watch/sp-wmciaj00s40.0012-dong-ho-citizen-nam-nh8350-59l-day-thep-khong-gi-40mm-1.png', description: 'Đồng Hồ Citizen Nam Dây Thép Không Gỉ là sự lựa chọn hoàn hảo cho những quý ông yêu thích phong cách mạnh mẽ, hiện đại và bền bỉ.'},
            {productId: 39, name: 'Đồng hồ Citizen Nam Dây thép không gỉ 41 mm', category: 'watch', price: 8085000, img: '../assets/products/watch/sp-wmciaj00s41.0861-dong-ho-citizen-nam-nh8365-86m-day-thep-khong-gi-41mm-1.png', description: 'Đồng Hồ Citizen Nam Dây Thép Không Gỉ là sự lựa chọn hoàn hảo cho những quý ông yêu thích phong cách mạnh mẽ, hiện đại và bền bỉ.'},
            {productId: 40, name: 'Đồng hồ Disney & Marvel Nam Dây cao su', category: 'watch', price: 2550000, img: '../assets/products/watch/sp-wmdiqf00p43.0035-dong-ho-disney-marvel-nam-m-9306b-day-cao-su-43-mm-1.png', description: 'Khám phá sự kết hợp hoàn hảo giữa sức mạnh của các siêu anh hùng Marvel và những nhân vật huyền thoại của Disney với Đồng hồ Disney & Marvel Nam Dây Cao Su.'},
            {productId: 41, name: 'Đồng hồ Tissot T-Classic Nam Dây thép không gỉ 39 mm', category: 'watch', price: 20650000, img: '../assets/products/watch/sp-wmtiaw00s39.0013-dong-ho-tissot-t-classic-nam-t065.430.22.031.00-day-thep-khong-gi-39mm-1.png', description: 'Đồng Hồ Tissot T-Classic Nam Dây Thép Không Gỉ là mẫu đồng hồ đẳng cấp dành cho phái mạnh, mang đến vẻ ngoài sang trọng và tinh tế.'},
            {productId: 42, name: 'Đồng hồ Skagen Nữ Dây thép không gỉ 26 mm', category: 'watch', price: 4120000, img: '../assets/products/watch/wkf33b03545.100-skw2665-dong-ho-thoi-trang-nu-day-thep-khong-gi-chong-nuoc-skagen.png', description: 'Đồng hồ Skagen nữ dây thép không gỉ là một biểu tượng của sự tinh tế và thanh lịch, mang đến cho người sở hữu không chỉ công năng tuyệt vời mà còn là một phụ kiện thời trang hoàn hảo.'},
            {productId: 43, name: 'Đồng hồ Tissot T-Classic Nam Dây thép không gỉ 39.3 mm', category: 'watch', price: 21900000, img: '../assets/products/watch/wdp11d03200.000-d006.407.11.053.00-dong-ho-nam-day-thep-khong-gi-tissot.png', description: 'Đồng Hồ Tissot T-Classic Nam Dây Thép Không Gỉ là mẫu đồng hồ đẳng cấp dành cho phái mạnh, mang đến vẻ ngoài sang trọng và tinh tế.'}
        ];
        localStorage.setItem('products', JSON.stringify(productArray));
    }
}

// Show Products
function showProducts(page = 1, data = null) {
    const products = data || JSON.parse(localStorage.getItem("products")) || [];
    let html = "";

    currentPage = page;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    if (products.length === 0) {
        html = `<tr>
            <td colspan="7" class="no-data">Không tìm thấy sản phẩm</td>
        </tr>`;
    } else {
        paginatedProducts.forEach(p => {
            const descriptionPreview =
                p.description && p.description.length > 50
                    ? p.description.substring(0, 50) + "..."
                    : p.description || "Chưa có mô tả";

            html += `
            <tr>
                <td>${p.productId}</td>
                <td><img src="${p.img}" alt="${p.name}"></td>
                <td>${p.name}</td>
                <td>${p.price.toLocaleString("vi-VN")} ₫</td>
                <td>${getCategoryName(p.category)}</td>
                <td class="description-cell" title="${p.description || ""}">
                    ${descriptionPreview}
                </td>
                <td>
                    <button onclick="editProduct(${p.productId})">Sửa</button>
                    <button onclick="deleteProduct(${p.productId})">Xoá</button>
                </td>
            </tr>`;
        });
    }

    document.getElementById("productTable").innerHTML = html;
    renderPagination(totalPages, page, products.length);
}

// Render Pagination
function renderPagination(totalPages, currentPage, totalItems) {
    let paginationHtml = '';
    
    if (totalPages <= 1) {
        document.getElementById("pagination").innerHTML = '';
        return;
    }
    
    // Previous button
    paginationHtml += `
        <button onclick="showProducts(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ◀ Trước
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if ( i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            paginationHtml += `
                <button onclick="showProducts(${i})" class="${i === currentPage ? 'active' : ''}">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHtml += `<span class="page-info">...</span>`;
        }
    }
    
    // Next button
    paginationHtml += `
        <button onclick="showProducts(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Sau ▶
        </button>
    `;
    
    // Page info
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    paginationHtml += `
        <span class="page-info">
            Hiển thị ${startItem}-${endItem} / ${totalItems}
        </span>
    `;
    
    document.getElementById("pagination").innerHTML = paginationHtml;
}

// Delete Product
function deleteProduct(id) {
    if (!confirm("Bạn có chắc muốn xoá sản phẩm này?")) return;

    let products = JSON.parse(localStorage.getItem("products"));
    products = products.filter(p => p.productId !== id);

    localStorage.setItem("products", JSON.stringify(products));
    alert("Xoá sản phẩm thành công!");
    
    // Adjust current page if necessary
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    
    applyFilters();
}

// Edit Product
function editProduct(id) {
    const products = JSON.parse(localStorage.getItem("products"));
    const p = products.find(p => p.productId === id);

    if (p) {
        document.getElementById("productId").value = p.productId;
        document.getElementById("name").value = p.name;
        document.getElementById("price").value = p.price;
        document.getElementById("category").value = p.category;
        document.getElementById("description").value = p.description || '';
        
        // Show existing image preview
        document.getElementById("imagePreview").src = p.img;
        document.getElementById("imagePreviewContainer").style.display = "block";
        
        // Make image input optional when editing
        document.getElementById("img").required = false;
        
        // Update modal title
        document.getElementById("modalTitle").textContent = "Cập nhật sản phẩm";
        document.getElementById("btnText").textContent = "Cập nhật";
        
        // Open modal
        openModal();
    }
}

// Save Product (Create or Update)
function saveProduct(event) {
    event.preventDefault();

    const imgFile = document.getElementById("img").files[0];
    
    if (!imgFile && !document.getElementById("productId").value) {
        alert("Vui lòng chọn ảnh sản phẩm!");
        return;
    }

    // If new image is uploaded
    if (imgFile) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            saveProductWithImage(e.target.result);
        };
        
        reader.readAsDataURL(imgFile);
    } else {
        // Use existing image when updating without new image
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const id = document.getElementById("productId").value;
        const existingProduct = products.find(p => p.productId === Number(id));
        saveProductWithImage(existingProduct.img);
    }
}

// Save Product With Image Data
function saveProductWithImage(imageData) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const id = document.getElementById("productId").value;

    const product = {
        productId: id ? Number(id) : getNextProductId(products),
        name: document.getElementById("name").value,
        price: Number(document.getElementById("price").value),
        category: document.getElementById("category").value,
        img: imageData,
        description: document.getElementById("description").value || ''
    };

    if (id) {
        // Update existing product
        products = products.map(p => p.productId === product.productId ? product : p);
        alert("Cập nhật sản phẩm thành công!");
    } else {
        // Add new product
        products.push(product);
        alert("Thêm sản phẩm thành công!");
    }

    localStorage.setItem("products", JSON.stringify(products));
    closeModal();
    showProducts(currentPage);
}

// Get Next Product ID (Auto-increment)
function getNextProductId(products) {
    if (products.length === 0) {
        return 1;
    }
    
    // Find the highest existing ID and add 1
    const maxId = Math.max(...products.map(p => p.productId));
    return maxId + 1;
}

// Reset Form
function resetForm() {
    document.getElementById("productForm").reset();
    document.getElementById("productId").value = "";
    document.getElementById("modalTitle").textContent = "Thêm sản phẩm mới";
    document.getElementById("btnText").textContent = "Lưu sản phẩm";
    document.getElementById("imagePreviewContainer").style.display = "none";
    document.getElementById("img").required = true;
}

// Open Modal
function openModal() {
    document.getElementById("productModal").classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Close Modal
function closeModal() {
    document.getElementById("productModal").classList.remove("show");
    document.body.style.overflow = "auto"; // Restore scrolling
    resetForm();
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Get Category Name
function getCategoryName(category) {
    const categories = {
        'ring': 'Nhẫn',
        'necklace': 'Dây chuyền',
        'bracelet': 'Lắc tay',
        'watch': 'Đồng hồ'
    };
    return categories[category] || category;
}

// Preview Image Before Upload
function previewImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        imagePreview.src = e.target.result;
        imagePreviewContainer.style.display = "block";
    };
    reader.readAsDataURL(file);
}

// Filter Function
function applyFilters() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const categoryValue = document.getElementById("categoryFilter").value;

    const products = JSON.parse(localStorage.getItem("products")) || [];

    filteredProducts = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(searchValue);
        const matchCategory = categoryValue === "all" || p.category === categoryValue;
        return matchName && matchCategory;
    });

    showProducts(1, filteredProducts);
}

// Close Image Preview
function closeImagePreview() {
    document.getElementById("imagePreviewContainer").style.display = "none";
    document.getElementById("img").value = "";
}