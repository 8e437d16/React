import React from "react";
import { useParams } from "react-router-dom";

const data = {
  pig: {
    name: "돼지",
    description: "먹을것에 관심많은 동물",
  },

  goat: {
    name: "염소",
    description: "종이에 관심많은 동물",
  },
};

export default function Profile() {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
}
