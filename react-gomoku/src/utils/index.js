/**
 * 오목 승리 조건을 판단합니다.
 */

const moves = {
  "hor": [[0, 1], [0, -1]],     // --
  "ver": [[1, 0], [-1, 0]],     // |
  "diaLR": [[-1, -1], [1, 1]],  // \
  "diaRL": [[-1, 1], [1, -1]]   // /
};


/**
*
* @param {*} board 바둑판
* @param {*} px 현재 놓은 돌의 x 좌표
* @param {*} py 현재 놓은 돌의 y 좌표
*/

const judgement = (board, px, py) => {
  const R = board.length;
  const C = board[0].length;

  // 승리 여부 판단 
  for (let mv of Object.values(moves)) {
    if (win(board, R, C, px, py, mv)) return 'WIN';
  }

  // 무승부 판단
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (board[x][y] === -1) return 'NAL';
    }
  }

  return 'DRAW';
};


function win(board, R, C, px, py, mv) {
  const q = [];
  const pivot = board[px][py];
  const visit = new Array(R).fill(null).map( _ => new Array(C).fill(0));
  
  q.push([px, py]);
  visit[px][py] = 1;

  let same = 1;
  while (q.length) {
    let [x, y] = q.shift();

    for (let [dx, dy] of mv) {
      let nx = x + dx, ny = y + dy;

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

      if (!visit[nx][ny] && board[nx][ny] === pivot) {
        q.push([nx, ny]);
        visit[nx][ny] = 1;
        same += 1;

        if (same === 5) return 1;
      }
    }
  }
  
  return 0;
}

export default judgement;