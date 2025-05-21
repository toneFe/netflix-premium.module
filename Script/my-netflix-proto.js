let body = $response.body;
let obj = JSON.parse(body);
if (obj && obj.ads) {
    obj.ads = []; // Xóa quảng cáo
}
if (obj && obj.account && obj.account.plan) {
    obj.account.plan = 'premium'; // Giả lập gói Premium
    obj.account.maxStreams = 4; // Cho phép 4 thiết bị đồng thời
    obj.account.quality = '4k'; // Kích hoạt chất lượng 4K
}
$done({ body: JSON.stringify(obj) });
