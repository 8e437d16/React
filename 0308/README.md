# HTML(Hyper Text Markup Language)
웹 페이지의 구조를 정의하는 마크업 언어  

# CSS(Cascading Style Sheet)
마크업 언어로 작성된 문서를 표시, 스타일링 하는데 사용되는 스타일 언어

# JavaScript
Ecma International의 사양을 준수하는 범용 스크립트 언어  

# DOM(Document Object Model)
HTML, XML 프로그래밍 API. 문서의 논리적 구조, 접근, 조작 방식을 정의한다  

# Rendering  
데이터나 명세를 시각적인 형태로 변환하는 과정  

1. HTML Text Parsing -> Create DOM Tree, CSS Text Parsing -> Create CSSOM Tree
2. Create Render Tree using DOM Tree & CSSOM Tree
3. Layout
4. Paint

# SPA(Single Page Application)
1. 단일(Single) 페이지로 구성된 Application
2. 새로운 요청이 있을 때만 필요 데이터를 받아서 갱신
3. 서버로부터 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 작성
4. 일반적으로 CSR(Client Side Rendering)

# MUP(Multi Page Application)
1. 다수(Multi) 페이지로 구성된 Application
2. 새로운 요청이 있을 때마다 서버에서 렌더링된 정적 리소스를 다운로드
3. 일반적으로 SSR(Server Side Rendering)

# Client & Server
클라이언트: 서비스 사용자
서버: 서비스 제공자