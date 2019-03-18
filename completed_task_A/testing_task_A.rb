### Testing task A code:

# Carry out Static testing on the code below.
# Correct the errors below that you spotted in task 1.

class CardGame

## Missing attr_reader accessor methods for suit and value

  def initialize(suit, value)
    @suit = suit
    @value = value;
## Semi-colon not required at end of value
  end
## Would be better in a separate Card class

  def checkforAce(card)
## Naming convention for method name - would be better as 'check_for_ace'
    if card.value = 1
## Should be == 1
      return true
    else
      return false
    end
  end


  dif highest_card(card1 card2)
## Syntax error. Mispelling - should be def
## No comma between card1 and card2
  if card1.value > card2.value
    return card.name
## No property called 'name' initialised within the method or class
## so nothing will be returned. Change to '.value' or '.suit' for required value
  else
    card2
## Add '.value' or '.suit' to card2 to get property value required
  end
end
end
## Extra 'end' - remove

def self.cards_total(cards)
## Remove 'self'
  total
## Total not given a value
  for card in cards
## Change the 'for' to an 'each.do'
    total += card.value
    return "You have a total of " + total
## Total needs to be converted to a string
  end
end
## Bad indentation
