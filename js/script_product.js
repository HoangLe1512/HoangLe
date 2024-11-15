// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('asset/img/MAZDA222.jpg',
'XE MAZDA 2',
'TRADITIONAL',
'600000000',
`Mazda2 là dòng xe nhỏ gọn, thường có kiểu dáng hatchback hoặc sedan, phù hợp cho di chuyển trong thành phố.
 Đây là mẫu xe lý tưởng cho những ai cần một chiếc xe tiết kiệm nhiên liệu và dễ điều khiển trong các khu đô thị đông đúc.`,
'Pick It Now !')

BestSeller.add('asset/img/md3.jpg',
'XE MAZDA 3',
'TRADITIONAL',
'900000000',
`Mazda3 thuộc phân khúc xe hạng C, có hai phiên bản sedan và hatchback. Đây là dòng xe rất phổ biến của Mazda với thiết kế thể thao, 
phong cách và trang bị nhiều tính năng công nghệ hiện đại. 
Mazda3 nổi bật với động cơ SkyActiv-G giúp tiết kiệm nhiên liệu và khả năng vận hành tốt.`,
'Pick It Now !');

BestSeller.add('asset/img/md6.jpg',
`XE MAZDA 6 `,
'TRADITIONAL',
'1200000000',
`Mazda6 là dòng xe sedan hạng D, có kích thước lớn hơn và mang lại trải nghiệm lái sang trọng, êm ái hơn.
 Xe được trang bị nhiều công nghệ hiện đại như hệ thống an toàn i-Activsense, động cơ SkyActiv-X và nội thất cao cấp.
 Mazda6 thường được lựa chọn cho những người tìm kiếm sự thoải mái và đẳng cấp.`,
'Pick It Now !');

BestSeller.add('asset/img/cx3.jpg',
`Mazda CX-3`,
'TRADITIONAL',
'800000000',
`Mazda CX-3 là mẫu SUV cỡ nhỏ, phù hợp cho gia đình trẻ hoặc người dùng cá nhân. 
Với thiết kế nhỏ gọn và linh hoạt, CX-3 dễ dàng di chuyển trong thành phố nhưng vẫn đáp ứng được nhu cầu đi đường dài.
 CX-3 cũng sử dụng động cơ SkyActiv và có nhiều tính năng an toàn. `,
'Pick It Now !')

BestSeller.add('asset/img/cx5.jpg',
`Mazda CX-5`,
'TRADITIONAL',
'900000000',
`Mazda CX-5 là một trong những dòng xe bán chạy nhất của Mazda trong phân khúc SUV cỡ trung. 
Với thiết kế mạnh mẽ, phong cách và nhiều tính năng an toàn tiên tiến, CX-5 là lựa chọn phổ biến cho gia đình. 
Xe có cả hai tùy chọn động cơ xăng và dầu, cùng hệ thống dẫn động AWD (dẫn động bốn bánh) ở một số phiên bản. `,
'Pick It Now !')

BestSeller.add('asset/img/cx9.jpg',
`Mazda CX-9`,
'TRADITIONAL',
'2200000000',
`Mazda CX-9 là dòng SUV cỡ lớn, có không gian rộng rãi với 3 hàng ghế, phù hợp cho các gia đình lớn hoặc những ai cần chở nhiều người và hàng hóa.
 Xe được trang bị động cơ mạnh mẽ, nhiều tính năng tiện ích và công nghệ an toàn cao cấp, mang lại cảm giác lái mượt mà, êm ái.`,
'Pick It Now !')

BestSeller.add('asset/img/mx5.jpg',
`Mazda MX-5 Miata`,
'TRADITIONAL',
'1900000000',
`Mazda MX-5 Miata là dòng xe thể thao mui trần nổi tiếng của Mazda. Đây là mẫu xe mang lại trải nghiệm lái thú vị và phong cách độc đáo, nhờ thiết kế nhỏ gọn, nhẹ và khả năng tăng tốc tốt.
 MX-5 Miata nổi tiếng về độ bền bỉ và dễ điều khiển, là lựa chọn yêu thích của những người đam mê tốc độ.`,
'Pick It Now !')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('asset/img/c-class.jpg',
`Mercedes-Benz C-Class`,
'DESIGNED',
`1800000000`,
`Dòng C-Class thuộc phân khúc sedan hạng sang cỡ nhỏ, với thiết kế hiện đại, nội thất sang trọng và nhiều tính năng an toàn. 
Đây là mẫu xe phổ biến với những ai muốn sở hữu xe sang Mercedes-Benz ở tầm trung.`,
'Pick IT Now !');

FeatureProduct.add('asset/img/e-class.jpg',
`Mercedes-Benz E-Class`,
'DESIGNED',
`2600000000`,
`E-Class thuộc phân khúc sedan hạng trung, mang phong cách sang trọng và được trang bị nhiều công nghệ hiện đại.
 E-Class phù hợp cho doanh nhân hoặc người dùng tìm kiếm sự thoải mái và đẳng cấp.`,
'Pick It Now !');

FeatureProduct.add('asset/img/s-class.jpg',
`Mercedes-Benz S-Class`,
'DESIGNED',
`5000000000`,
`S-Class là dòng sedan hạng sang cao cấp của Mercedes-Benz, được mệnh danh là "ông vua" của dòng sedan với công nghệ tiên tiến, thiết kế tinh tế và độ sang trọng vượt trội.
 Đây là lựa chọn phổ biến của các doanh nhân và người nổi tiếng. `,
'Pick It Now !');

FeatureProduct.add('asset/img/a-class.jpg',
`Mercedes-Benz A-Class`,
'DESIGNED',
`1500000000`,
`A-Class là dòng xe nhỏ gọn và có mức giá "dễ chịu" hơn so với các dòng khác, nhưng vẫn đảm bảo chất lượng và công nghệ Mercedes-Benz. 
Xe thường có thiết kế năng động, hướng tới khách hàng trẻ tuổi.`,
'Pick It Now !');

FeatureProduct.add('asset/img/gla-class.jpg',
`Mercedes-Benz GLA-Class`,
'DESIGNED',
`2000000000`,
`GLA-Class là dòng SUV cỡ nhỏ với thiết kế thể thao, phong cách trẻ trung, phù hợp cho người dùng có nhu cầu di chuyển linh hoạt trong thành phố.`,
'Pick It Now !');

FeatureProduct.add('asset/img/glc-class.jpg',
`Mercedes-Benz GLC-Class`,
'DESIGNED',
`2200000000`,
`GLC-Class là dòng SUV hạng sang cỡ trung, với thiết kế mạnh mẽ, nội thất rộng rãi và nhiều tiện nghi cao cấp, phù hợp cho các gia đình. `,
'Pick It Now !');



FeatureProduct.add('asset/img/gle-class.jpg',
`Mercedes-Benz GLE-Class`,
'DESIGNED',
`4500000000`,
`GLE-Class là dòng SUV cỡ lớn hơn GLC, có không gian rộng rãi hơn và động cơ mạnh mẽ hơn, phù hợp với gia đình lớn hoặc những người yêu thích xe SUV sang trọng. `,
'Pick It Now !');

FeatureProduct.add('asset/img/gls-class.jpg',
`Mercedes-Benz GLS-Class`,
'DESIGNED',
`7000000000`,
`GLS-Class là dòng SUV lớn nhất của Mercedes-Benz, với thiết kế sang trọng, sức chứa 7 chỗ ngồi và nhiều tiện nghi hiện đại. 
Đây là mẫu SUV cao cấp hướng tới khách hàng yêu cầu không gian rộng và tính năng cao cấp. `,
'Pick It Now !');



FeatureProduct.add('asset/img/amg-gt.jpg',
`Mercedes-Benz AMG GT`,
'DESIGNED',
`12000000000`,
`AMG GT là dòng xe thể thao cao cấp của Mercedes-Benz, với thiết kế mạnh mẽ, động cơ mạnh và khả năng vận hành ưu việt. 
Đây là lựa chọn của những ai yêu thích tốc độ và phong cách thể thao. `,
'Pick It Now !');






localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));