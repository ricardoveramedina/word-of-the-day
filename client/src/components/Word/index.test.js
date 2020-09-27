import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Word from './index';
import Typography from '@material-ui/core/Typography';

Enzyme.configure({ adapter: new Adapter() });

describe('Word', () => {
  //const words = fetchWord();

  const wordsData = {
    furigana: 'いちなん',
    word: '一男',
    jlptLevel: null,
    typeOfWord: 'Noun',
    meanings: [
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
    ],
    link: 'https://jisho.org/word/%E4%B8%80%E7%94%B7',
  };

  it('should check if title exist', () => {
    const wrapper = shallow(<Word words={wordsData} />);
    expect(wrapper.find('Fragment')).toHaveLength(1);

    //const card = cardContent.find(Typography).at(0);
    //const card = cardContent.find(Typography).hasClass(classes.title).text();
    const typography = wrapper.find(Typography);

    typography.forEach((element) => {
      element.html().match(/title/gim) &&
        expect(element.text()).toBe('Word of the Day');
    });
  });
});

/* 
test('renders learn react link', () => {
  const { getByText } = render(<Word />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
