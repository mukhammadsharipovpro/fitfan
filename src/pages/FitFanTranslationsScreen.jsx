import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import FitFanHeader from '../components/FitFanHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FitFanHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('X-Games', '02.10 15:00', 'Big Air \n' + 'Finals')}
        {renderBroadcast('Winter X-Games', '04.10 16:45', 'Slopestyle \n' + 'Men’s Final')}
        {renderBroadcast('Red Bull', '06.10 18:00', 'Final Run')}
        {renderBroadcast('BMX', '08.10 19:30', 'Freestyle Park \n' + 'Finals')}
        {renderBroadcast('Street League', '10.10 17:15', 'Super Final')}
        {renderBroadcast('US Open', '12.10 14:30', 'Halfpipe \n' + 'Finals')}
        {renderBroadcast('Parkour', '14.10 12:45', 'Freestyle \n' + 'Final')}
        {renderBroadcast('Climbing', '16.10 16:00', 'Lead Climbing \n' + 'Finals')}
        {renderBroadcast('Wingsuit', '18.10 18:15', 'Speed Flight')}
        {renderBroadcast('Freestyle', '20.10 20:00', 'Best Trick Competition')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    paddingVertical: 5,
  },
});
