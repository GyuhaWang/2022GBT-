// 데이터 예시
/*{
    teamId: 3,
    sex: "male",
    university: [2],
    height: 185,
    hobby: [1],
    age: 24,
    shape: 3,
    matchingCOndition: 4,
  }*/
for (var female in MatchingDataFeMale3) {
  for (var male in MatchingDataMale3) {
    let maleCheck = false;
    let femaleCheck = false;

    if (MatchingDataFeMale3[female].matchingCOndition == 1) {
      //우리팀 조건 체크
      console.log("true");
      femaleCheck = condition1(
        MatchingDataFeMale3[female],
        MatchingDataMale3[male]
      );
      if (MatchingDataMale3[male].matchingCOndition == 1) {
        maleCheck = condition1(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 2) {
        maleCheck = condition2(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 3) {
        maleCheck = condition3(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 4) {
        maleCheck = condition4(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 5) {
        maleCheck = condition5(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      }
      if (femaleCheck == true && maleCheck == true) {
        matchingDone.push({
          female: MatchingDataFeMale3[female].teamId,
          male: MatchingDataMale3[male].teamId,
        });
        newMale = MatchingDataMale3.slice(male + 1);
        MatchingDataMale3 = newMale;
        break;
      }
      //둘다 true이면 완료 대기열에 추가 후
    } else if (MatchingDataFeMale3[female].matchingCOndition == 2) {
      //우리팀 조건 체크
      console.log("true");
      femaleCheck = condition2(
        MatchingDataFeMale3[female],
        MatchingDataMale3[male]
      );
      if (MatchingDataMale3[male].matchingCOndition == 1) {
        maleCheck = condition1(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 2) {
        maleCheck = condition2(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 3) {
        maleCheck = condition3(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 4) {
        maleCheck = condition4(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 5) {
        maleCheck = condition5(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      }
      if (femaleCheck == true && maleCheck == true) {
        matchingDone.push({
          female: MatchingDataFeMale3[female].teamId,
          male: MatchingDataMale3[male].teamId,
        });
        newMale = MatchingDataMale3.slice(male + 1);
        MatchingDataMale3 = newMale;
        break;
      }
      //둘다 true이면 완료 대기열에 추가 후
    } else if (MatchingDataFeMale3[female].matchingCOndition == 3) {
      //우리팀 조건 체크

      femaleCheck = condition3(
        MatchingDataFeMale3[female],
        MatchingDataMale3[male]
      );
      if (MatchingDataMale3[male].matchingCOndition == 1) {
        maleCheck = condition1(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 2) {
        maleCheck = condition2(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 3) {
        maleCheck = condition3(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 4) {
        maleCheck = condition4(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 5) {
        maleCheck = condition5(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      }
      if (femaleCheck == true && maleCheck == true) {
        matchingDone.push({
          female: MatchingDataFeMale3[female].teamId,
          male: MatchingDataMale3[male].teamId,
        });
        newMale = MatchingDataMale3.slice(male + 1);
        MatchingDataMale3 = newMale;
        break;
      }
      //둘다 true이면 완료 대기열에 추가 후
    } else if (MatchingDataFeMale3[female].matchingCOndition == 4) {
      //우리팀 조건 체크
      console.log("true");
      femaleCheck = condition4(
        MatchingDataFeMale3[female],
        MatchingDataMale3[male]
      );
      if (MatchingDataMale3[male].matchingCOndition == 1) {
        maleCheck = condition1(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 2) {
        maleCheck = condition2(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 3) {
        maleCheck = condition3(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 4) {
        maleCheck = condition4(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 5) {
        maleCheck = condition5(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      }
      if (femaleCheck == true && maleCheck == true) {
        matchingDone.push({
          female: MatchingDataFeMale3[female].teamId,
          male: MatchingDataMale3[male].teamId,
        });
        newMale = MatchingDataMale3.slice(male + 1);
        MatchingDataMale3 = newMale;
        break;
      }
      //둘다 true이면 완료 대기열에 추가 후
    } else if (MatchingDataFeMale3[female].matchingCOndition == 5) {
      //우리팀 조건 체크

      femaleCheck = condition5(
        MatchingDataFeMale3[female],
        MatchingDataMale3[male]
      );
      if (MatchingDataMale3[male].matchingCOndition == 1) {
        maleCheck = condition1(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 2) {
        maleCheck = condition2(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 3) {
        maleCheck = condition3(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 4) {
        maleCheck = condition4(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      } else if (MatchingDataMale3[male].matchingCOndition == 5) {
        maleCheck = condition5(
          MatchingDataMale3[male],
          MatchingDataFeMale3[female]
        );
      }
      if (femaleCheck == true && maleCheck == true) {
        matchingDone.push({
          female: MatchingDataFeMale3[female].teamId,
          male: MatchingDataMale3[male].teamId,
        });
        newMale = MatchingDataMale3.slice(male + 1);
        MatchingDataMale3 = newMale;
        break;
      }

      //둘다 true이면 완료 대기열에 추가 후
    }
  }
}

function condition1(ourTeam, counterTeam) {
  //1= 같은 대학교는 싫어요
  let available = true;

  ourTeam.university.map((ouruniv) => {
    counterTeam.university.map((counterUinv) => {
      if (ouruniv == counterUinv) {
        available = false;
      }
    });
  });

  return available;
}
function condition2(ourTeam, counterTeam) {
  //2= 키는 우리보다 커야됨
  let available = true;
  if (ourTeam.height < counterTeam.height) {
    available = false;
  }
  return available;
}
function condition3(ourTeam, counterTeam) {
  //3=취미 같은 것이 하나라도 있는지
  let available = false;

  ourTeam.hobby.map((ouruniv) => {
    counterTeam.hobby.map((counterUinv) => {
      if (ouruniv == counterUinv) {
        available = true;
      }
    });
  });

  return available;
}
function condition4(ourTeam, counterTeam) {
  //나이는 +- 5살
  let available = false;
  if (
    ourTeam.age <= counterTeam.age + 3 &&
    ourTeam.age >= counterTeam.age - 3
  ) {
    available = true;
  }
  return available;
}
function condition5(ourTeam, counterTeam) {
  //몸매는 나보다 작아야함
  let available = false;
  if (ourTeam.shape >= counterTeam.shape) {
    available = true;
  }
  return available;
}
