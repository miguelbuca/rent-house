import * as Location from "expo-location";

/**
 * This method request the permissions for approximate and exact device location. It also needs the foreground service permission to subscribe to location updates, while the app is in use.
 * @param callback
 */
export const resquestLocationPermission = async (
  callback?: (location: Location.LocationObject | null, error: string | null) => void
) => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    callback && callback(null, "Permission to access location was denied");
    return;
  }

  let loc = await Location.getCurrentPositionAsync({});
  callback && callback(loc, null);
};
