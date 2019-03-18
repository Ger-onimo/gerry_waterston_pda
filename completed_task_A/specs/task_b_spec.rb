require("minitest/autorun")
require("minitest/rg")
require_relative("../testing_task_B")
require_relative("../card")

class CardGameTest < MiniTest::Test

  def setup
    @cardGame1 = CardGame.new()
    @cardClub = Card.new("clubs", 9)
    @cardDiamond = Card.new("diamonds", 3)
    @cards = [@cardClub, @cardDiamond]
  end

  def test_card_is_ace
    assert_equal(false, @cardGame1.check_for_ace(@cardDiamond))
  end

  def test_can_get_highest_card
    assert_equal(9, @cardGame1.highest_card(@cardClub, @cardDiamond))
  end

  def test_can_get_card_value_total
    assert_equal("You have a total of 12", @cardGame1.cards_total(@cards))
  end

end
