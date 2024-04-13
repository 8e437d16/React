
# HTML(Hyper Text Markup Language)
Hyper Text: 참조를 통해 한 문서에서 다른 문서로 접근할 수 있는 텍스트.  
Markup Language: 태그 등을 이용하여 문서나 데이터의 구조를 명기하는 언어

# HTML 구조
RESERVED

# CSS(Cascading Style Sheet)
마크업 언어가 실제 표시 되는 방법을 기술하는 **스타일 언어**

# DOM(Document Object Model)
문서 객체 모델은 HTML 또는 XML 문서를 각 노드가 문서의 일부를 나타내는 객체인 트리 구조로 처리하는 교차 플랫폼 및 언어 독립적인 인터페이스.

# Rendering
문서가 브라우저에 출력되는 과정

1. HTML Text -> DOM Tree
2. CSS -> CSSOM(CSS Object Model) Tree
3. Render Tree = DOM Tree + CSSOM Tree
4. Layout
5. Paint

# SPA(Single Page Application)
1. 단일(Single) 페이지로 구성된 Application
2. 새로운 요청이 있을 때만 필요 데이터를 받아서 갱신
3. 서버로부터 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 작성
4. 일반적으로 CSR(Client Side Rendering)

# MPA(Multi Page Application)
1. 다수(Multi) 페이지로 구성된 Application
2. 새로운 페이지를 요청할 때 마다 서버에서 렌더링된 정적 리소스가 다운로드.
3. 일반적으로 SSR(Server Side Rendering)

# Client & Server
클라이언트: 서비스 이용자  
서버: 서비스 제공자