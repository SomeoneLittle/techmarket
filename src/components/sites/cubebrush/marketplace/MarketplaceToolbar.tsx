import { asset } from "@/lib/asset";

export function MarketplaceToolbar() {
  return (
    <>
      <div className="dh-toolbar is-static">
        <div className="dh-toolbar-inner">
          <h2 className="cb-sr">
            All products
          </h2>
          <div aria-label="All products filter" className="dh-tabs" data-dh-tabs="#mp-grid" data-tab-rainbow="" data-tab-slider="" role="tablist">
            <button aria-selected="true" className="dh-tab" data-tab="popular" role="tab" type="button">
              Popular
            </button>
            <button aria-selected="false" className="dh-tab" data-tab="recent" role="tab" type="button">
              Recent
            </button>
            <button aria-selected="false" className="dh-tab" data-tab="freebies" role="tab" type="button">
              Weekly freebies
            </button>
            <button aria-selected="false" className="dh-tab" data-tab="sale" role="tab" type="button">
              On sale
            </button>
            <button aria-selected="false" className="dh-tab" data-tab="nsfw" role="tab" type="button">
              NSFW
            </button>
          </div>
          <div className="dh-toolbar-right">
            <form action="/marketplace" className="dh-search-pill" id="mp-search" method="get" role="search">
              <input aria-autocomplete="list" aria-controls="mp-search-suggestions" aria-expanded="false" aria-label="Search products" autoComplete="off" name="q" placeholder="Search products…" role="combobox" type="search" />
              <button aria-label="Search" data-mp-search-toggle="" type="submit">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#search-6fa128b3-ns")} />
                </svg>
              </button>
              <div aria-label="Search suggestions" className="cb-suggest cb-dd-menu" hidden id="mp-search-suggestions" role="listbox" />
              <span aria-live="polite" className="cb-sr" data-none="No suggestions" data-one="1 suggestion" data-other={"{count} suggestions"} role="status" />
            </form>
            <button aria-controls="dh-filters" aria-expanded="false" aria-label="Filter marketplace" className="dh-ftoggle dh-filter-toggle" data-dh-filters-grid="#mp-grid" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#filter-02eb0adc-ns")} />
              </svg>
              <span data-f-ftoggle-label="">
                Filters
              </span>
              <span className="n" data-f-fcount="" hidden>
                0
              </span>
            </button>
          </div>
        </div>
      </div>
      <section aria-hidden="true" aria-label="Filters" className="dh-filters is-closed" data-category="All categories" data-dh-filters="" id="dh-filters" inert role="region">
        <div className="dh-filters-clip">
          <div className="dh-filters-inner">
            <div className="dh-fhead">
              <div className="title">
                Filters
              </div>
              <button className="dh-reset" data-f-reset="" disabled type="button">
                Reset filters
              </button>
            </div>
            <div className="dh-fblock">
              <div className="dh-flabel">
                Category
              </div>
              <div data-filter-group="single" data-f-cat-picker="" className="dh-chips">
                <button className="dh-chip" type="button" aria-pressed="true" data-cat-pick="All categories">
                  All categories
                </button>
                <button className="dh-chip" type="button" aria-pressed="false" data-cat-pick="Tutorials">
                  Tutorials
                </button>
                <button className="dh-chip" type="button" aria-pressed="false" data-cat-pick="3D Assets">
                  3D Assets
                </button>
                <button className="dh-chip" type="button" aria-pressed="false" data-cat-pick="2D Assets">
                  2D Assets
                </button>
                <button className="dh-chip" type="button" aria-pressed="false" data-cat-pick="Audio">
                  Audio
                </button>
                <button className="dh-chip" type="button" aria-pressed="false" data-cat-pick="Other">
                  Other
                </button>
                <button className="dh-chip" type="button" aria-pressed="false" data-cat-pick="Tools">
                  Tools
                </button>
              </div>
            </div>
            <input aria-label="Search categories" autoComplete="off" className="dh-fsearch" hidden placeholder="Search categories" type="search" />
            <p className="dh-fsearch-empty" hidden role="status">
              No categories match
            </p>
            <div className="dh-fsections">
              <section className="dh-fsection" data-cats="Tutorials Tools" data-key="focus" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Focus
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-segment" data-filter-group="single">
                    <button aria-pressed="false" type="button">
                      2D
                    </button>
                    <button aria-pressed="false" type="button">
                      3D
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Tutorials 3D-Assets 2D-Assets Audio Other Tools" data-key="pack" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Bundle
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-segment" data-filter-group="single">
                    <button aria-pressed="false" type="button">
                      Single
                    </button>
                    <button aria-pressed="false" type="button">
                      Pack
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Tutorials" data-key="tut-industry" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Industry
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Architectural Visualization
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Business
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Digital Art
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Film Production
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Game Development
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Traditional Art
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Tutorials" data-key="tut-skill" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Skill level
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips" data-filter-group="single">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Beginner
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Advanced
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Tutorials" data-key="tut-subject" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Subject
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Anatomy
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Animation
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      AR
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Characters
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Comic Art
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Compositing
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Concept Art
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Drawing
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Environments
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      FX
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Guides
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Hardware
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Illustration
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      KitBashing
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Level Design
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Lifestyle
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Lighting
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Materials
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Modeling
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Money
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Painting
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      PhotoBashing
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Pixel Art
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Props
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Rendering
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Rigging
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Scripting
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Sculpting
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Shaders
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Storyboard
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Texturing
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      User Interface
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      UVs
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      UV Unwrapping
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      VR
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Other
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Tutorials" data-key="tut-software" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Software
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3D-Coat
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3DO
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3ds Max
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Affinity Designer
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Affinity Photo
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Affinity Publisher
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      AfterBurn
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      A.I.
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Arnold
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      AutoCAD
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Blender
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Cinema 4D
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Clip Studio Paint
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Corel Painter
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Corona
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      DDO
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      FurryBall
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Fusion 360
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Game Engines
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      GameMaker
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Houdini
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Illustrator
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Keyshot
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Krita
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      LightWave 3D
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Lumion
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Manga Studio
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Mari
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Marmoset
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Marvelous Designer
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Maya
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Modo
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Mudbox
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      NDO
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Nuke
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      OctaneRender
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Painter
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Paintstorm Studio
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Photoshop CC
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Procreate
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      RealFlow
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      SketchBook
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      SketchUp
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Substance B2M
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Substance Designer
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Substance Painter
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Toon Boom StoryBoard Pro
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Toon Boom Studio
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Topology tools
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Traditional
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      UDK
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unity
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unreal Engine 4
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unreal Engine 5
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      UVLayout
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      World Machine
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      ZBrush
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Other
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="3D-Assets" data-key="3d-assetType" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Asset type
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3D Print Models
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3D Scans
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Animations
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Architectural Visualization
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Base Meshes
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Game ready
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      High Poly Models
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      KitBash
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Mods
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Render Scenes
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Rigs
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="3D-Assets" data-key="3d-subject" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Subject
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Aircrafts
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Airplanes
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Animals
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Appliances
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      AR
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Bikes
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Boats
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Buildings
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Buses
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Cars
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Cartoon
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Characters and Anatomy
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Clothes
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Creatures and Monsters
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Electronics
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Environments
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Exterior Architecture
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Exterior Decoration
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Fantasy
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Food
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Furniture
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Hard Surface
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Helicopters
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Human/People
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Interior Architecture
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Interior Decoration
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Kitbash
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Lights
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Mechanical
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Megascans
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Musical Instruments
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Nature
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Organic
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      PBR
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Plants
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Procedural
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Props
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Realism
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Sci-Fi
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Space
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Sports
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Tableware
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Tanks
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Tools
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Trains
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Trucks
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Vehicles
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      VR
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Weapons
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Other
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="3D-Assets" data-key="3d-software" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Software
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3ds Max
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      A.I.
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      AutoCAD
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Blender
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Browser Viewer
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Cinema 4D
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      CryENGINE
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Houdini
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Maya
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Solidworks
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unity
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unreal Engine 4
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unreal Engine 5
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      ZBrush
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="2D-Assets" data-key="2d-assetType" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Asset type
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Stock Photos
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Textures
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      HDRi
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      2D Game Assets
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Materials
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Illustrations
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="2D-Assets" data-key="2d-subject" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Subject
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Animals
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Buildings
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Concrete
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Cosplay
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Dirt
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Doors
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Fabric
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Fire
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Floors
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Food
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Ground
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Landscapes
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Man
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Metal
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Objects
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Ornaments
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Paper
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      People
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Photo Sets
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Plants
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Plastic
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Pose & Figure Reference
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Roads
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Rocks
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Rust
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Scrap
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Skies
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Walls / Tiles
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Water
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Woman
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Wood
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Other
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Camera Effects
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Cartoon
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Characters
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Clothes
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Clouds
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Custom Shapes
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Decals
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Dirt
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Fabrics
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Fantasy
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Fire
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Ground
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Horror
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Masks
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Mechanical
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Organic
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Paint
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Paper
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Patterns
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Plants
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Rocks
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Rust
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Sci-Fi
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Smoke
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Splatter
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Vinyls
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Wall
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Weapons
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Wood
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Other
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Interiors
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Landscapes
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Skies
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Alphas
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Animals
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Backgrounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Characters
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Creatures
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Icons & GUI
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Props
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Sprites
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Tilesets
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Concrete
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Fabric
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Floors
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Ground
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Landscapes
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      MatCap
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Megascans
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Metal
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Organic
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Paper
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Patterns
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      PBR
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Plastic
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Roads
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Rocks
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Skies
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Skin
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Substance
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      UDK
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Unity
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Unreal Engine 4
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Unreal Engine 5
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Walls / Tiles
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Wood
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      ZBrush
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Other
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Characters
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Commissions
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Environments
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Fanart
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Matte Paintings
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Props
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Trading Card Games
                    </button>
                    <button aria-pressed="false" className="dh-chip" hidden type="button">
                      Wallpapers
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Audio" data-key="audio-assetType" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Asset type
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Music
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Sounds
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Audio" data-key="audio-genre" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Genre
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Ambient
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Children's
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Cinematic
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Classical
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Corporate
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Country, Western
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Drum & Bass, Breakbeat
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Electronica
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Experimental, Abstract
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Folk, Acoustic
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Funk, Groove
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Hip-Hop
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Holiday & Seasonal
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      House
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Jazz
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Miscellaneous
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Percussion
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Pop
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Rock
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Soul, R&B
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Vocals, Voice
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      World Beat
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Audio" data-key="audio-subject" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Subject
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Buttons & Menus
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Cartoon Sounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Domestic Sounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Futuristic Sounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Game Sounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Human Sounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Industrial Sounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Interface Sounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Nature Sounds
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Transitions & Movement
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Urban Sounds
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Other" data-key="other-assetType" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Asset type
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Comics
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Commissions - 2D
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Commissions - 3D
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      eBooks & Magazines
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Fonts
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Games
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Illustrations
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Lightroom Presets
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Photoshop Actions
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Promotional Artwork
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Stock Videos
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Substance Nodes / Utilities
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Templates
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Uncategorized
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unreal Engine 4 Blueprint
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unreal Engine 5 Blueprint
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Tools" data-key="tools-toolType" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    Tool type
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Applications
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Scripts & Plugins
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Software Brushes
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Tools" data-key="tools-software2d" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    2D Software
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Affinity Designer
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Affinity Photo
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Affinity Publisher
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      A.I.
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Clip Studio Paint
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Corel Painter
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Illustrator
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Krita
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Manga Studio
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Nuke
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Paintstorm Studio
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Photoshop CC +
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Photoshop CS6 +
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Procreate
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      SketchBook
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Toon Boom StoryBoard Pro
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Toon Boom Studio
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Other
                    </button>
                  </div>
                </div>
              </section>
              <section className="dh-fsection" data-cats="Tools" data-key="tools-software3d" data-open="false" hidden>
                <button aria-expanded="false" className="dh-fsection-head" type="button">
                  <span className="label">
                    3D Software
                  </span>
                  <span className="count" hidden>
                    0
                  </span>
                  <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                  </svg>
                </button>
                <div className="dh-fsection-body">
                  <div className="dh-chips">
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3D Coat
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3DO
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      3ds Max
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      AfterBurn
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Arnold
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      AutoCAD
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Blender
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Cinema 4D
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Corona
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      CryENGINE
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      DDO
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      FumeFX
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Fusion 360
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Game Engines
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      GameMaker
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Houdini
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Keyshot
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      LightWave 3D
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Mari
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Marmoset
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Marvelous Designer
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Maya
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Mental Ray
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Modo
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Mudbox
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      NDO
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      OctaneRender
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      SketchUp
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Substance B2M
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Substance Designer
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Substance Painter
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Topology tools
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Traditional
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      UDK
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unity
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unreal Engine 4
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Unreal Engine 5
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      UVLayout
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      World Machine
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      ZBrush
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      ZBrush IMM
                    </button>
                    <button aria-pressed="false" className="dh-chip" type="button">
                      Other
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div className="dh-frow">
              <div className="dh-fgroup">
                <div className="dh-flabel">
                  Price
                </div>
                <div className="dh-price">
                  <label className="lo cb-price-min">
                    <span>
                      $
                    </span>
                    <input aria-label="Minimum price" inputMode="numeric" max="5000" min="1" step="1" type="number" defaultValue="1" />
                  </label>
                  <div className="dh-range" style={{"--hi": "100.0%"} as React.CSSProperties}>
                    <div className="dh-range-track" />
                    <div className="dh-range-fill" />
                    <input aria-label="Maximum price" data-f-max="" max="5000" min="1" type="range" defaultValue="5000" />
                  </div>
                  <span data-f-hi="">
                    $5,000
                  </span>
                </div>
              </div>
              <div className="dh-fgroup">
                <div className="dh-flabel">
                  Rating
                </div>
                <div aria-label="Minimum rating" className="dh-rating" data-filter-group="single" role="radiogroup">
                  <button aria-pressed="false" data-rating="1" type="button">
                    <span className="star">
                      ★
                    </span>
                    1+
                  </button>
                  <button aria-pressed="false" data-rating="2" type="button">
                    <span className="star">
                      ★
                    </span>
                    2+
                  </button>
                  <button aria-pressed="false" data-rating="3" type="button">
                    <span className="star">
                      ★
                    </span>
                    3+
                  </button>
                  <button aria-pressed="false" data-rating="4" type="button">
                    <span className="star">
                      ★
                    </span>
                    4+
                  </button>
                  <button aria-pressed="false" data-rating="5" type="button">
                    <span className="star">
                      ★
                    </span>
                    5+
                  </button>
                </div>
              </div>
              <div className="dh-fgroup">
                <div className="dh-flabel">
                  Sort by
                </div>
                <div data-filter-group="single" data-default-sort="popular" data-f-sort="" className="dh-chips">
                  <button className="dh-chip" type="button" aria-pressed="false" hidden>
                    Relevant
                  </button>
                  <button className="dh-chip" type="button" aria-pressed="true">
                    Popular
                  </button>
                  <button className="dh-chip" type="button" aria-pressed="false">
                    Newest
                  </button>
                  <button className="dh-chip" type="button" aria-pressed="false">
                    Price ↑
                  </button>
                  <button className="dh-chip" type="button" aria-pressed="false">
                    Price ↓
                  </button>
                  <button className="dh-chip" type="button" aria-pressed="false">
                    Rating
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
