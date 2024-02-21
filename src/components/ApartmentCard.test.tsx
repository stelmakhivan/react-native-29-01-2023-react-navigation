import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import * as ReactNative from 'react-native';

import { ApartmentCard } from '@/components/ApartmentCard';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

const mockedColorScheme = jest.fn();

// jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
//   ...jest.requireActual(
//     'react-native/Libraries/Utilities/useColorScheme',
//   ),
//   useColorScheme: mockedColorScheme,
// }));

describe('ApartmentCard component', () => {
  const colorSchemeSpy = jest.spyOn(ReactNative, 'useColorScheme');

  beforeEach(() => {
    render(<ApartmentCard name="Name" image="test" price={20} />);
  });

  const pushMock = jest.fn();
  const useRouterMock = useRouter as jest.Mock;

  useRouterMock.mockReturnValue({
    push: pushMock,
  });

  it('should renders correctly', () => {
    const button = screen.getByTestId('apartment-card-button');

    expect(button).toBeTruthy();
  });

  it('should navigate to apartment details', () => {
    const button = screen.getByTestId('apartment-card-button');

    fireEvent.press(button);

    expect(pushMock).toHaveBeenCalledWith(
      `/(drawer)/(stack)/apartment/Name`,
    );
  });

  it('should set background color to the button', () => {
    colorSchemeSpy.mockReturnValue('dark');
    const button = screen.getByTestId('apartment-card-button');

    // #767676

    // expect(button).toHaveStyle({ backgroundColor: '#767676' });
  });
});
