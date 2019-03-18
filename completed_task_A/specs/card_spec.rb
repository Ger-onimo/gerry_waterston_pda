require("minitest/autorun")
require("minitest/rg")
require_relative("../card")

class CardTest < MiniTest::Test

  def setup
    @card = Card.new("clubs", 9)
  end

  def test_CardGame_has_suit
    assert_equal("clubs", @card.suit())
  end

  def test_CardGame_has_value
    assert_equal(9, @card.value())
  end

end
