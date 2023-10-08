import React from 'react';
import {useState} from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function TicTacToe({navigation}) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [middleSquare, setMiddle] = useState('');
  const [specialPresses, setSpecialPresses] = useState(0);

  function handlePress(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  function specialPress() {
    const specialCount = specialPresses + 1;
    setSpecialPresses(specialCount);
    setMiddle('X');
    if (specialPresses > 2) {
      navigation.navigate('Main');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridContainer}>
        {/* Row 1 */}
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handlePress(0)}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handlePress(1)}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handlePress(2)}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
        {/* Row 2 */}
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handlePress(3)}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handlePress(5)}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
        {/* Row 3 */}
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handlePress(6)}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handlePress(7)}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRectangle}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handlePress(8)}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 65,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonRectangle: {
    height: 100,
    width: 100,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1dcf7',
    padding: 10,
  },
});

/*
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => specialClick()} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
*/
