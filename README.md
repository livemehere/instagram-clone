# React Native Instagram Clone

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
