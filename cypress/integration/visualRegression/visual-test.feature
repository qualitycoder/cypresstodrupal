Feature: Visual Regression Test

  @visual_live
  Scenario: Compare existing live with dev
    Given I load pages from fixture "chimu.json"
    When I capture Percy snapshots for each page

  @visual_design
  Scenario: Compare Figma design with Dev
    Given I load pages from fixture "drl-syb-home.json"
    When I capture Percy snapshots for each page
