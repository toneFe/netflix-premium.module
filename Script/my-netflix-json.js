let headers = $request.headers;
headers['X-Netflix-Premium'] = 'true'; // Giả lập trạng thái Premium
headers['User-Agent'] = 'Netflix/8.121.0'; // Giả lập ứng dụng Premium
$done({ headers });
