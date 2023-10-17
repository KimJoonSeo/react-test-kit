Static Analysis

작성한 코드가 잘 짜여졌는지 확인하는 과정. 코드를 잘짯는지 확인.
- 스타일, 포맷이 일정한지
- 일반적인 실수나 버그가 있는지
- 코드의 복잡성이 심하지는 않은지
- 변수 타입은 일정한지

툴들
- typescript : 변수 타입이 일정한지 확인
- eslint : js/ts 코드 중에 문제시되는 패턴이 있는지 검사
- prettier : 코드 포맷팅을 담당
- husky : git commit이나 push 전에 원하는 스크립트를 실행 (test, lint, format 등)