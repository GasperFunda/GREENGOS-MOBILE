import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import { Icon, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const GardenDetailViewScreen_6Fi5ZXwW = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const mapViewwIaDAHIXRef = React.useRef();

  return (
    <ScreenContainer
      hasTopSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      <ExamplePropertiesApi.FetchIndividualPropertyGET method={'GET'} id={1}>
        {({ loading, error, data, refetchIndividualProperty }) => {
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
            <>
              <View
                style={StyleSheet.applyWidth(
                  { height: 420, width: '100%' },
                  dimensions.width
                )}
              >
                <ImageBackground
                  style={StyleSheet.applyWidth(
                    {
                      height: '100%',
                      justifyContent: 'flex-end',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                  source={{ uri: `${fetchData?.image_url}` }}
                  resizeMode={'cover'}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        paddingBottom: 24,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 24,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['App Green'],
                          borderRadius: 8,
                          flexDirection: 'row',
                          paddingBottom: 6,
                          paddingLeft: 12,
                          paddingRight: 8,
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.surface,
                              fontFamily: 'Poppins_500Medium',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'Only $'}
                          {fetchData?.nightly_price}
                          {' per night'}
                        </Text>
                      </View>
                      <View />
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      paddingBottom: 24,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 24,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.light,
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 12,
                      },
                      dimensions.width
                    )}
                  >
                    {fetchData?.city}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 22,
                      },
                      dimensions.width
                    )}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          name={'Ionicons/md-earth-sharp'}
                          color={theme.colors['App Green']}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.beds}
                          {' crops'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={20}
                          name={'MaterialCommunityIcons/fruit-grapes'}
                          color={theme.colors['App Green']}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.bathrooms}
                          {' types of plants'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          name={'Ionicons/md-earth-sharp'}
                          color={theme.colors['App Green']}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.beds}
                          {' crops'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={20}
                          name={'MaterialCommunityIcons/fruit-grapes'}
                          color={theme.colors['App Green']}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.bathrooms}
                          {' types of plants'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                    </View>
                  </View>
                  {/* Spacer 2 */}
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.surface,
                        borderRadius: 16,
                        paddingBottom: 8,
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRadius: 10, height: 240, overflow: 'hidden' },
                        dimensions.width
                      )}
                    >
                      <MapView
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                        latitude={fetchData?.latitude}
                        longitude={fetchData?.longitude}
                        zoomEnabled={true}
                        rotateEnabled={true}
                        scrollEnabled={true}
                        loadingEnabled={true}
                        showsPointsOfInterest={true}
                        zoom={16}
                        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
                        ref={mapViewwIaDAHIXRef}
                      >
                        <MapMarker
                          longitude={fetchData?.longitude}
                          title={fetchData?.name}
                          latitude={fetchData?.latitude}
                          pinColor={theme.colors.primary}
                        />
                      </MapView>
                    </View>
                  </View>
                  {/* Spacer 3 */}
                  <Spacer top={8} right={8} bottom={8} left={8} />
                </View>
              </View>
              <View />
            </>
          );
        }}
      </ExamplePropertiesApi.FetchIndividualPropertyGET>
    </ScreenContainer>
  );
};

export default withTheme(GardenDetailViewScreen_6Fi5ZXwW);
