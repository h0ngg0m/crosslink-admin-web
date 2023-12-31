export const City = {
  서울: '서울',
  부산: '부산',
  대구: '대구',
  인천: '인천',
  광주: '광주',
  대전: '대전',
  울산: '울산',
  세종: '세종',
  경기: '경기',
  강원: '강원',
  충북: '충북',
  충남: '충남',
  전북: '전북',
  전남: '전남',
  경북: '경북',
  경남: '경남',
  제주: '제주'
}

export type CityType = (typeof City)[keyof typeof City]

export const AdminRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  BASIC_ADMIN: 'BASIC_ADMIN'
}

export type AdminRoleType = (typeof AdminRole)[keyof typeof AdminRole]
