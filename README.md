# React Native Instagram Clone

## 앱 

<p align="center">
<img src="https://user-images.githubusercontent.com/61547778/172020482-c6f798ce-d990-4e24-abfd-65fff7609921.jpeg" width="250"/>
</p>

## TODO 

- [ ] 자기자신 스토리 있을 시 표시 변경
- [ ] 'view all [] comments' 눌렀을 시 detail 페이지로 이동 -> 차이점은 덧 글 다보인다는 점 밖에 없으면 될듯
- [ ] 좋아요, 댓글, DM, 북마크, ... 기능
- [ ] DM 아이콘 rotate 시키기 or 그냥 사진하나 구하기
- [ ] 프로필 페이지 만들기
- [ ] 게시글에서 사용자 아이콘 누를시 프로필 페이지 이동
- [ ] 메인화면에서 포스팅 끝까지 스크롤 안되는 문제
- [ ] 하단 메뉴바 만들기
- [ ] 아이콘 JSX 문제 해결하기

## 추가 설치 library

```bash
expo install expo-font @expo-google-fonts/inter # logo font
expo install expo-linear-gradient # stroy gardiant View
```

## Trouble Shouting

- `'???' cannot be used as a JSX component` 가 발생했다면 react 18 버전의 호환 문제이다
- package.json

```json
"resolutions": {
"@types/react": "17.0.44"
}
```
