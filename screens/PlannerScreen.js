import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as APIApi from '../apis/APIApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const PlannerScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header Frame */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 0, flexShrink: 0 },
          dimensions.width
        )}
      >
        {/* Navigation Frame */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', flexGrow: 0, flexShrink: 0 },
            dimensions.width
          )}
        >
          {/* Flex Touchable */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0 },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Left Frame */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', flexGrow: 1, flexShrink: 0 },
                  dimensions.width
                )}
              >
                {/* Icon Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      paddingBottom: 12,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  {/* Back */}
                  <Icon
                    name={'AntDesign/arrowleft'}
                    size={24}
                    color={theme.colors.custom_rgb97_116_246}
                  />
                </View>
                {/* Screen Title Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      paddingBottom: 12,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  {/* Title */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 18,
                        lineHeight: 24,
                      },
                      dimensions.width
                    )}
                  >
                    {'Planner'}
                  </Text>
                </View>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Scroll Content Frame */}
      <ScrollView
        style={StyleSheet.applyWidth({ flexGrow: 1 }, dimensions.width)}
        contentContainerStyle={StyleSheet.applyWidth(
          { flexShrink: 0 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Following List Frame */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 12 }, dimensions.width)}
        >
          {/* List Content Frame */}
          <View>
            <APIApi.FetchGetPlannedActivitiesGET>
              {({ loading, error, data, refetchGetPlannedActivities }) => {
                const fetchData = data;
                if (!fetchData || loading) {
                  return <ActivityIndicator />;
                }

                if (error) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      There was a problem fetching this data
                    </Text>
                  );
                }

                return (
                  <FlatList
                    data={fetchData}
                    listKey={'bmZvs2D7'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* Records Frame */}
                          <View
                            style={StyleSheet.applyWidth(
                              { marginTop: 12 },
                              dimensions.width
                            )}
                          >
                            {/* Flex Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  marginBottom: 12,
                                  marginLeft: 12,
                                  marginRight: 12,
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                {/* Record Item Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderBottomWidth: 1,
                                      borderColor:
                                        theme.colors.custom_rgb218_218_218,
                                      borderLeftWidth: 1,
                                      borderRadius: 12,
                                      borderRightWidth: 1,
                                      borderTopWidth: 1,
                                      flexDirection: 'row',
                                      flexGrow: 0,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <View>
                                    <Image
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Image'
                                          ],
                                          { height: 50, width: 50 }
                                        ),
                                        dimensions.width
                                      )}
                                      source={{ uri: `${listData?.icon_url}` }}
                                      resizeMode={'cover'}
                                    />
                                  </View>
                                  {/* Middle Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        marginLeft: 18,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Top Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                          marginRight: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Record Name */}
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors.strong,
                                            fontFamily: 'OpenSans_700Bold',
                                            paddingBottom: 9,
                                          },
                                          dimensions.width
                                        )}
                                        ellipsizeMode={'tail'}
                                      >
                                        {listData?.name}
                                      </Text>
                                      <>
                                        {!(listData?.type === '1') ? null : (
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text'
                                              ],
                                              dimensions.width
                                            )}
                                          >
                                            {'Activity: Plant'}
                                          </Text>
                                        )}
                                      </>
                                      <>
                                        {!(listData?.type === '2') ? null : (
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text'
                                              ],
                                              dimensions.width
                                            )}
                                          >
                                            {'Activity: Fetch\n'}
                                          </Text>
                                        )}
                                      </>
                                    </View>
                                    {/* Second Line Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                          flexGrow: 0,
                                          flexShrink: 0,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Time */}
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors
                                                .custom_rgb153_153_153,
                                            fontFamily: 'OpenSans_600SemiBold',
                                            fontSize: 10,
                                            lineHeight: 16,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'Date:'}
                                        {listData?.start}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    numColumns={1}
                  />
                );
              }}
            </APIApi.FetchGetPlannedActivitiesGET>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PlannerScreen);
